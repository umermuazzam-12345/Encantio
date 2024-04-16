import { Box, Typography } from "@mui/material";
import { style } from "./style";
import pack from "../../assets/images/package.png";
import design from "../../assets/images/design.png";
import launch from "../../assets/images/launch.png";
import Partner from "./partner/Partner";
import Faqs from "./faqs/Faqs";
import BookCall from "./bookCall/BookCall";

const HowItWorks = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.howItWork}>
        <Typography sx={style.head}>how it works</Typography>
        <Typography sx={style.title}>Your vision, our design</Typography>
        <Box sx={style.cards}>
          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={pack} alt="choose package" />
            </Box>
            <Typography sx={style.cTitle}>Choose your package</Typography>
            <Typography sx={style.desc}>
              Select the package that aligns perfectly with your brand's needs,
              whether for web design or for digital design.
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={design} alt="choose design" style={style.icon} />{" "}
            </Box>
            <Typography sx={style.cTitle}>Request your design</Typography>
            <Typography sx={style.desc}>
              Request your design expert design team, with updates every Let us
              bring your ideas to life with our 48 or 72 hours.
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={launch} alt="revise and launch" />
            </Box>
            <Typography sx={style.cTitle}>Revise and Launch</Typography>
            <Typography sx={style.desc}>
              100% satisfied, and then watch your We'll revise the design until
              you are business grow.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* partner component  */}
      <Partner />

      {/* frequently ask question component */}
      <Faqs />

      {/* Boo a call component  */}
      <BookCall />
    </Box>
  );
};

export default HowItWorks;
