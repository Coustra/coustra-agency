import { Hero } from "./components/Hero";
import { HeadlineSection } from "./components/HeadlineSection";
import { ContactCard } from "./components/ContactCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageCard } from "./components/ImageCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper className='my-32'>
        <ImageCard />
      </SectionWrapper>
      <SectionWrapper className='my-16'>
        <HeadlineSection />
      </SectionWrapper>
      <SectionWrapper className='my-32' section='creator-agency'>
        <ImageCard left />
      </SectionWrapper>
      <SectionWrapper className='my-32'>
        <ImageCard />
      </SectionWrapper>
      <SectionWrapper className='my-16 mt-32'>
        <ContactCard />
      </SectionWrapper>
    </>
  );
}
