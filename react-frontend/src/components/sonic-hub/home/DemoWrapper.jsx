import "../../../css/home.css"
import Disclaimer from "./Disclaimer";
import DemoArea from "./home-components/demo-area/DemoArea";
import DemoFooter from "./home-components/demo-area/DemoFooter";

const DemoWrapper = () => {
  return (
    <div className="demo-wrapper">
      <Disclaimer />
      <DemoArea />
      <DemoFooter />
    </div>
  )
}

export default DemoWrapper