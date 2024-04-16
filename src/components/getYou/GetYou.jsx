import { Box, Typography } from "@mui/material";
import { style } from "./style";
import downArr from "../../assets/images/downArr.png";
import dislike from "../../assets/images/dislike.png";
import emoji from "../../assets/images/emoji.png";
import OurServices from "./ourServices/OurServices";
import Advertisement from "./advertisement/Advertisement";
import Benifits from "./ourBenifits/Benifits";
import Testimonials from "./testimonials/Testimonials";

const GetYou = () => {
  return (
    <Box sx={style.wrapper}>
      <Typography sx={style.title}>We get you...</Typography>
      <Box sx={style.cardsContainer}>
        <Box sx={style.card1}>
          <Box sx={style.icon}>
            <img src={downArr} alt="down arrow" />
          </Box>
          <Typography sx={style.cardTitle}>
            Your website lacks revenue optimization
          </Typography>
          <Typography sx={style.desc}>
            Is your website effectively converting visitors into leads? If not,
            you could be missing out on thousands of dollars. Let Encantio
            design your website for business growth and success.
          </Typography>
        </Box>

        <Box sx={style.card1}>
          <Box sx={style.icon}>
            <img src={dislike} alt="" />
          </Box>
          <Typography sx={style.cardTitle}>
            You find it difficult to stand out and build trust
          </Typography>
          <Typography sx={style.desc}>
            Is your website effectively converting visitors into leads? If not,
            you could be missing out on thousands of dollars. Let Encantio
            design your website for business growth and success.
          </Typography>
        </Box>

        <Box sx={style.card1}>
          <Box sx={style.icon}>
            <img src={emoji} alt="" />
          </Box>
          <Typography sx={style.cardTitle}>
            Your website lacks revenue optimization
          </Typography>
          <Typography sx={style.desc}>
            Is your website effectively converting visitors into leads? If not,
            you could be missing out on thousands of dollars. Let Encantio
            design your website for business growth and success.
          </Typography>
        </Box>
      </Box>

      {/* our services components  */}
      <OurServices />

      {/* advertisement components  */}
      <Advertisement />

      {/* benifits components  */}
      <Benifits />

      {/* testimonials component  */}
      <Testimonials />
    </Box>
  );
};

export default GetYou;
