<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit();
}

require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON data."
    ]);
    exit();
}

$firstName = trim($data["firstName"] ?? "");
$lastName = trim($data["lastName"] ?? "");
$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$company = trim($data["company"] ?? "");
$type = trim($data["type"] ?? "");
$description = trim($data["description"] ?? "");

if ($firstName !== "" || $lastName !== "") {
    $name = trim($firstName . " " . $lastName);
}

$name = mb_substr($name, 0, 120);
$email = mb_substr($email, 0, 180);
$company = mb_substr($company, 0, 180);
$type = mb_substr($type, 0, 80);
$description = mb_substr($description, 0, 5000);

if ($name === "" || $email === "") {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please enter your name and email."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit();
}

$sql = "INSERT INTO phoenicia
(name, email, company, type, description)
VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Could not save your inquiry."
    ]);
    exit();
}

$stmt->bind_param(
    "sssss",
    $name,
    $email,
    $company,
    $type,
    $description
);

if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Could not save your inquiry."
    ]);
    $stmt->close();
    $conn->close();
    exit();
}

$safe = function ($value) {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
};

$headerValue = function ($value) {
    return trim(str_replace(["\r", "\n"], "", $value));
};

$to = "support@phoeniciacapital.co.uk";
$subject = $headerValue("New Website Enquiry — " . $name);
$message = "
<html>
<body>
    <h2>New Website Enquiry</h2>
    <p><strong>Name:</strong> {$safe($name)}</p>
    <p><strong>Email:</strong> {$safe($email)}</p>
    <p><strong>Organization:</strong> {$safe($company)}</p>
    <p><strong>Type:</strong> {$safe($type)}</p>
    <p><strong>Message:</strong></p>
    <p>" . nl2br($safe($description)) . "</p>
</body>
</html>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Phoenicia Capital <support@phoeniciacapital.co.uk>\r\n";
$headers .= "Reply-To: " . $headerValue($email) . "\r\n";

$emailSent = mail(
    $to,
    $subject,
    $message,
    $headers,
    "-f support@phoeniciacapital.co.uk"
);

echo json_encode([
    "success" => true,
    "emailSent" => (bool) $emailSent,
    "message" => "Form submitted successfully."
]);

$stmt->close();
$conn->close();

?>
