import ProductHeader from "../components/ProductsPage/ProductHeader";
import ProductsList from "../components/ProductsPage/Products";
import CTASection from "../components/CTASection/CTASection";
import Footer from "../components/Footer/Footer";

export default function Products() {
  return (
    <>
      <ProductHeader />
      <ProductsList />  
      <CTASection />
      <Footer />
    </>
  );
}
