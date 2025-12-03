import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { BeliefsSection } from "@/components/sections/BeliefsSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SolutionsPreview } from "@/components/sections/SolutionsPreview";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { ProductsPreview } from "@/components/sections/ProductsPreview";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TestimonialsPreview } from "@/components/sections/TestimonialsPreview";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StorySection />
      <BeliefsSection />
      <ServicesPreview />
      <SolutionsPreview />
      <WhyUsSection />
      <ProductsPreview />
      <ImpactSection />
      <TestimonialsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
