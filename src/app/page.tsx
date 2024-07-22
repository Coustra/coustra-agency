import Image from "next/image";
import { Hero } from "./components/Hero";
import { HeadlineSection } from "./components/HeadlineSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ContactCard } from "./components/ContactCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeadlineSection />
      <ContactCard />
    </>
  );
}
