import { Metadata } from "next";
import HomeTop from "@/components/molecules/home/HomeTop";
import MobileAppSection from "@/components/molecules/home/MobileAppSection";
import WebSection from "@/components/molecules/home/WebSection";

export const metadata: Metadata = {
  title: "Welcome to Codeoflyf",
};

export default function Home() {
  return (
    <>
      <HomeTop />
      <MobileAppSection />
      <WebSection />
    </>
  );
}
