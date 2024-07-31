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
          title='Our goals ...'
          text="In today's hyper-connected world, we often feel more isolated than ever. The surge in online businesses is undeniable, with countless companies vying for attention and sales. However, we believe in a different approach. At our core, we value building and growing alongside our community. We champion the power of community-driven companies and strive to turn our followers into stakeholders, fostering a sense of belonging and mutual growth."
        />
      </SectionWrapper>
      <SectionWrapper className='my-16'>
        <HeadlineSection
          sectionTitle='👨‍💻 About us'
          title='A true creator company at heart.'
          text='A company of third culture thinkers building simple but impactful
          community-driven software solutions.'
        />
      </SectionWrapper>
      <SectionWrapper className='my-32'>
        <SkillsCard
          title='Our Skills ...'
          text='While our goal is to build community-driven software solutions, we also have a wide range of skills that we can offer to our stakeholders (like you 👋). We are experts in web development, mobile app development, and digital marketing. We also have experience in graphic design, video editing, and social media management. We are always looking for new challenges and opportunities to learn and grow.'
        />
      </SectionWrapper>
      <SectionWrapper className='my-16 mt-32'>
        <ContactCard />
      </SectionWrapper>
    </>
  );
}
