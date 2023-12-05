import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
