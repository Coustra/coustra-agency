import { Hero } from "./components/Hero";
import { HeadlineSection } from "./components/HeadlineSection";
import { ContactCard } from "./components/ContactCard";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ImageCard } from "./components/ImageCard";
import { SkillsCard } from "./components/SkillsCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionWrapper className='my-32' section='creator-agency'>
        <ImageCard
          left
          title='We are creators.'
          text=' While being more connected than ever, we feel more disconnected than
            ever. People desire to belong and be part of something bigger than
            ourselves. We swear by creator-driven companies embracing
            communities being the future. This thesis drives the company culture
            at Blank Studio shaping the processes and systems of the company—a
            culture driven by freedom with a lot of responsibility.'
        />
      </SectionWrapper>
      <SectionWrapper className='my-16'>
        <HeadlineSection
          sectionTitle='About us'
          title='A true creator company at heart.'
          text='A company of third culture thinkers building simple but impactful
          community-driven software solutions based out of Hong Kong, Barcelona,
          Amsterdam, London, Shanghai and New York'
        />
      </SectionWrapper>
      <SectionWrapper className='my-32'>
        <SkillsCard
          title='Our Skills?'
          text=' While being more connected than ever, we feel more disconnected than
            ever. People desire to belong and be part of something bigger than
            ourselves. We swear by creator-driven companies embracing
            communities being the future. This thesis drives the company culture
            at Blank Studio shaping the processes and systems of the company—a
            culture driven by freedom with a lot of responsibility.'
        />
      </SectionWrapper>
      {/* <SectionWrapper className='my-32'>
        <ImageCard
          title='How do we work?'
          text=' While being more connected than ever, we feel more disconnected than
            ever. People desire to belong and be part of something bigger than
            ourselves. We swear by creator-driven companies embracing
            communities being the future. This thesis drives the company culture
            at Blank Studio shaping the processes and systems of the company—a
            culture driven by freedom with a lot of responsibility.'
        />
      </SectionWrapper> */}
      <SectionWrapper className='my-16 mt-32'>
        <ContactCard />
      </SectionWrapper>
    </>
  );
}
