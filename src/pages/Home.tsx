import BenefitSection from "../components/organisms/BenefitSection";
import Hero from "../components/organisms/Hero";
import OurProduct from "../components/organisms/OurProduct";
import ProductSection from "../components/organisms/ProductSection";

const Home = () => {
  return (
    <section>
      <Hero />
      <BenefitSection />
      <ProductSection />
      <OurProduct />
    </section>
  );
};

export default Home;
