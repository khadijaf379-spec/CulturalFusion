import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { NewArrivalsSection } from "@/components/home/NewArrivalsSection";
import { EditorialBanner } from "@/components/home/EditorialBanner";
import { FeaturedCollection } from "@/components/home/FeaturedCollection";
import { FoundationBanner } from "@/components/home/FoundationBanner";
import { StyleEditSection } from "@/components/home/StyleEditSection";
import { StorySection } from "@/components/home/StorySection";
import { JournalSection } from "@/components/home/JournalSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <NewArrivalsSection />
      <EditorialBanner />
      <FeaturedCollection />
      <FoundationBanner />
      <StyleEditSection />
      <StorySection />
      <JournalSection />
    </>
  );
}
