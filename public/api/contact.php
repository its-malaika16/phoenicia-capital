<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "db.php";

// Allow only POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "message" => "Method Not Allowed"
    ]);
    exit();
}

// Read JSON body
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON data."
    ]);
    exit();
}

// Get values
$name  = trim($data["name"] ?? "");
$email      = trim($data["email"] ?? "");
$company      = trim($data["company"] ?? "");
$type   = trim($data["type"] ?? "");
$description = trim($data["description"] ?? "");

// Validate required fields
if (
    empty($name) ||
    empty($email) ||
    empty($company) ||
    empty($type)
) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit();
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Invalid email address."
    ]);
    exit();
}

// Insert into database
$sql = "INSERT INTO phoenicia
(name, email, company, type, description)
VALUES (?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param(
    "sssss",
    $name,
    $email,
    $company,
    $type,
    $description
);

if ($stmt->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Form submitted successfully."
    ]);

} else {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Database insert failed."
    ]);

}
 
$stmt->close();
$conn->close();

?>