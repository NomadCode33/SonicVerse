import "../css/home.css"
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Disclaimer from "../components/home/Disclaimer";
import DemoArea from "../components/home/DemoArea";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <main className="home-page">
      <Navbar />
      <Hero />
      <Disclaimer />
      <DemoArea />
      <Footer />
    </main>
  )
}

export default Home