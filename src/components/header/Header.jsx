import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./hero/Hero";
import OurWork from "./ourWork/OurWork";
import TrustedBy from "./trustedBy/TrustedBy";

const style = {
  backgroundColor: "#090a18",
  maxWidth: "1440px",
  overflow: "hidden",
  margin: "auto",
  backgroundImage: 'url("./heroBg.png"),url("./blur.png")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const Header = () => {
  return (
    <Box sx={style}>
      {/* nav bar component  */}
      <Navbar />
      {/* hero component  */}
      <Hero />
      {/* our work component  */}
      <OurWork />
      {/* trusted by component  */}
      <TrustedBy />
    </Box>
  );
};

export default Header;
