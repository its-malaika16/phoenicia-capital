import Seo from "../components/Seo";
import ProductHeader from "../components/ProductsPage/ProductHeader";
import ProductsList from "../components/ProductsPage/Products";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";

export default function Products() {
  return (
    <>
      <Seo
        title="Our Ventures | Phoenicia Capital Holdings"
        description="Phoenicia Capital owns four ventures: TeachWise for recruitment, Petrovate for energy, Cedar Capital Bank for digital banking, and Cedar Payroll for UK payroll."
        path="/products"
      />
      <ProductHeader />
      <ProductsList />  
      <CTASection />
      <Footer />
    </>
  );
}
