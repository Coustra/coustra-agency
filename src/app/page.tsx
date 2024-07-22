import Image from "next/image";
import { Hero } from "./components/Hero";
import { HeadlineSection } from "./components/HeadlineSection";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { ContactCard } from "./components/ContactCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageCard } from "./components/ImageCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper>
        <HeadlineSection />
      </SectionWrapper>
      <SectionWrapper>
        <ImageCard left />
      </SectionWrapper>
      <SectionWrapper>
        <ImageCard />
      </SectionWrapper>
      <SectionWrapper className='my-16'>
        <ContactCard />
      </SectionWrapper>
    </>
  );
}
