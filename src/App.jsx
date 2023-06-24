import react from "react";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import SaveMoney from "./components/Save/SaveMoney";
import HowToWork from "./components/HowToWork/HowToWork"
import Testimonials from "./components/testimonials/Testimonials";
import Pricing from "./components/Pricing/Pricing";
import Blog from "./components/Blog/Blog";
import Download from "./components/Download/Download";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <SaveMoney />
      <HowToWork />
      <Testimonials />
      <Pricing />
      <Blog />
      <Download />
      <Form />
      <Footer />
    </div>
  );

}


export default App;
