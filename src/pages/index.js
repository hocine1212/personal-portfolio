import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <ToastContainer autoClose={2500} />
    </div>
  );
}
