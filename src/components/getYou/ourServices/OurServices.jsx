import { style } from "./style";
import { Box, Typography } from "@mui/material";
import figma from "../../../assets/images/figma.png";
import webFlow from "../../../assets/images/webFlow.png";
import growthBnk from "../../../assets/images/growthBnk.png";

const OurServices = () => {
  return (
    <Box>
      <Box sx={style.services}>
        <Typography sx={style.head}>Our serivces</Typography>
        <Typography sx={style.title}>Your one stop solution</Typography>
        <Box sx={style.buttons}>
          <Typography sx={style.btn}>Web Design</Typography>
          <Typography sx={style.btn}>Branding</Typography>
          <Typography sx={style.btn}>Digital Design</Typography>
        </Box>
        <Box sx={style.card}>
          <Box sx={style.left}>
            <Typography sx={style.left.title}>
              Web Design & Development
            </Typography>
            <Typography sx={style.left.desc}>
              {" "}
              Get a reliable and high-converting website that turns visitors
              into clients.
            </Typography>
            <Typography sx={style.left.btn}>Landing page</Typography>
            <Typography sx={style.left.btn}>Responsive Design</Typography>
            <Typography sx={style.left.btn}>Multi-page website</Typography>
            <Box sx={style.left.figma}>
              <img src={figma} alt="" /> Figma Design
            </Box>
            <Box sx={style.left.webFlow}>
              <Box>
                <img src={webFlow} alt="" />
              </Box>{" "}
              Webflow devlopment
            </Box>
          </Box>

          <Box sx={style.right}>
            <img
              src={growthBnk}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
