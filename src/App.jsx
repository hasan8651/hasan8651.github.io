import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-7xl flex flex-col items-center mx-auto">
     <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
