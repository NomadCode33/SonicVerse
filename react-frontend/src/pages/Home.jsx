import "../css/home.css"
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import DemoWrapper from "../components/home/DemoWrapper";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <DemoWrapper />
      <Footer />
    </main>
  )
}

export default Home