import "../../../css/verse-hub/home.css";
import { useOutletContext } from 'react-router-dom';
import Hero from "../../../components/verse-hub/shared-templates/Hero";
import DemoWrapper from "../../../components/verse-hub/home/DemoWrapper";

/*import Hero from "../components/verse-hub/home/Hero";
import DemoWrapper from "../components/verse-hub/home/DemoWrapper";*/

const Home = ({ showText, showContent }) => {
  const { variant } = useOutletContext();

  return (
    <main className={showContent ? "home-main" : "home-main--hidden"}>
      {/* Hidden via CSS so state is preserved */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero variant={variant} showText={showText} />
        <DemoWrapper variant={variant} />
      </div>
    </main>
  );
};

export default Home;