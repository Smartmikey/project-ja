
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import RangeSection from "@/components/RangeSection";
import ShowRoom from "@/components/ShowRoom";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <section className="p-8 md:p-16">
        <Title subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
          Browse Our Range
        </Title>

        <RangeSection />

        <div>
          <Title>Our Product</Title>

          <Products />
        </div>
      </section>

      <ShowRoom />
    </main>
  );
}
