import { Box, Typography } from "@mui/material";
import { style } from "./style";
import logo from "../../assets/images/logo.png";
import s from "../../assets/images/ultratick.png";

const Footer = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.footer}>
        <Box sx={style.fLeft}>
          <img src={logo} alt="encantio" style={{ width: "134px" }} />
          <Typography sx={style.address}>
            {" "}
            Encantio is headquarted in Buenos Aires, Argentina.
          </Typography>
          <Typography sx={style.gaurentee}>
            {" "}
            <Box>
              <img src={s} alt="strip payment guaranteed" />
            </Box>{" "}
            100% satisfaction guaranteed, if not your money back.
          </Typography>
          <Box sx={style.devider}></Box>
        </Box>
        <Box>
          <Box sx={style.fRight}>
            <Box component={"span"}>
              <Typography>Resources</Typography>
              <Typography>Recent Work</Typography>
              <Typography>Services</Typography>
              <Typography>Testimonials</Typography>
            </Box>
            <Box component={"span"}>
              <Typography>Benifits</Typography>
              <Typography>Packages</Typography>
              <Typography>About</Typography>
              <Typography>FAQ</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={style.allRights}>
        <Typography sx={style.copyRight}>
          © 2024 Encantio. All rights reserved.
        </Typography>
        <Box sx={style.terms}>
          <Typography>Privacy policy</Typography>
          <Typography> Terms & conditions</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
