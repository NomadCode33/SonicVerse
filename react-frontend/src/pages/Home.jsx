import "../css/home.css"
import Hero from "../components/sonic-hub/home/Hero";
import DemoWrapper from "../components/sonic-hub/home/DemoWrapper";

const Home = ({ showText, showContent }) => {
  return (
    <main style={{ minHeight: showContent ? "150vh" : "300vh" }}>
      {/* Hidden via CSS so state is preserved */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero showText={showText} />
        <DemoWrapper />
      </div>
    </main>
  )
}

export default Home