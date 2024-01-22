import Layout from "./Component/Layout/Layout";
// import { FaBeer } from "react-icons/fa";
import About from "./Pages/about/About";
import TechStack from "./Pages/Techstack/TechStack";
import Projects from "./Pages/projects/Projects";
import Education from "./Pages/Education/Education";
import WorkExp from "./Pages/WorkExperience/WorkExp";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTeheme } from "./contaxt/TehemeContext";
import MobileNav from "./Component/mobilenav/MobileNav";
import Tada from "react-reveal/Tada";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [teheme] = useTeheme();

  return (
    <>
      <div id={teheme}>
        <ToastContainer />
        <MobileNav></MobileNav>
        <Layout></Layout>
        <div className="container">
          <About></About>
          <Education></Education>
          <TechStack></TechStack>
          <Projects></Projects>
          <WorkExp></WorkExp>
          <Contact></Contact>
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              made with😍Abichal Shukla &copy; 2024
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#1e1e2c", borderradius: "80px" }}
      />
    </>
  );
}

export default App;
