import HeroMain from "./components/hero-sections/hero-main";
import ProductList from "./components/services/services-list";
import BenefitsSection from "./components/content/benefits";
import FacebookReviews from "./components/reviews/facebook";
import FAQs from "./components/faqs/faq-home";
export default function HomePage(){
  return(
    <>
      <HeroMain />
      <BenefitsSection />
      <FacebookReviews />
      <ProductList />
      <FAQs />
    </>
  )
}