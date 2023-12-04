import About from "./HomeComponents/About";
import Banner from "./HomeComponents/Banner";
import Collaborators from "./HomeComponents/Collaborators";
import FAQ from "./HomeComponents/FAQ";
import Footer from "./HomeComponents/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Collaborators />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
