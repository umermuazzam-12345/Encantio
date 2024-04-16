import { Box } from "@mui/material";
import Header from "../components/header/Header";
import GetYou from "../components/getYou/GetYou";
import Packages from "../components/packages/Packages";
import HowItWorks from "../components/howItWorks/HowItWorks";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Box>
      <Header />
      <GetYou />
      <Packages />
      <HowItWorks />
      <Footer />
    </Box>
  );
};

export default Home;
