import "../../../css/sonic-hub/home.css"
//import Disclaimer from "./Disclaimer";
import Disclaimer from "../shared-templates/Disclaimer";
import DemoArea from "./home-components/demo-area/DemoArea";
import DemoFooter from "./home-components/demo-area/DemoFooter";

const DemoWrapper = ({ variant }) => {
  return (
    <div className="demo-wrapper">
      <Disclaimer variant={variant} />
      <DemoArea />
      <DemoFooter />
    </div>
  );
};

export default DemoWrapper;