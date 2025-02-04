import BenefitSection from "../components/organisms/BenefitSection";
import Hero from "../components/organisms/Hero";
import LearnMore from "../components/organisms/LearnMore";
import OurProduct from "../components/organisms/OurProduct";
import ProductSection from "../components/organisms/ProductSection";
import Testimonials from "../components/organisms/TestimonialSection";

const Home = () => {
  return (
    <section>
      <Hero />
      <BenefitSection />
      <ProductSection />
      <OurProduct />
      <Testimonials />
      <LearnMore />
    </section>
  );
};

export default Home;
