import Image from "next/image";
import { Hero } from "./components/Hero";
import { HeadlineSection } from "./components/HeadlineSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeadlineSection />
    </>
  );
}
