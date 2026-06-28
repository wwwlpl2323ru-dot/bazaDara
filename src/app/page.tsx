import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Features } from "@/components/sections/features";
import { Program } from "@/components/sections/program";
import { Cabins } from "@/components/sections/cabins";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Booking } from "@/components/sections/booking";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Program />
        <Cabins />
        <Reviews />
        <FAQ />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
