import Divider from "./_components/Divider";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero />
      <Divider />
      <ProductSection />
    </div>

  );
}
