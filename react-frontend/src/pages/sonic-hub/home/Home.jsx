import "../../../css/sonic-hub/home.css";
import { useOutletContext } from 'react-router-dom';
import Hero from "../../../components/sonic-hub/shared-templates/Hero";
import DemoWrapper from "../../../components/sonic-hub/home/DemoWrapper";

/*import Hero from "../components/sonic-hub/home/Hero";
import DemoWrapper from "../components/sonic-hub/home/DemoWrapper";*/

const Home = ({ showText, showContent }) => {
  const { variant } = useOutletContext();

  return (
    <main style={{ minHeight: showContent ? "150vh" : "300vh" }}>
      {/* Hidden via CSS so state is preserved */}
      <div style={{ display: showContent ? "contents" : "none" }}>
        <Hero variant={variant} showText={showText} />
        <DemoWrapper variant={variant} />
      </div>
    </main>
  );
};

export default Home;