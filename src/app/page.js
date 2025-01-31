import Link from "next/link";
import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/layout/Hero";
import Menu from "@/app/components/layout/Menu";
import About from "@/app/components/layout/About";
import ReviewPage from "@/app/components/layout/Review";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <ReviewPage />
    </>
  );
}
