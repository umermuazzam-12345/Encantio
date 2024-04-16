import { Box, Typography } from "@mui/material";
import { style } from "./style";
import square from "../../../assets/images/square.png";
import dollar from "../../../assets/images/dollar.png";
import fast from "../../../assets/images/fast.png";
import stargroup from "../../../assets/images/stargroup.png";
import folder from "../../../assets/images/folder.png";
import allinone from "../../../assets/images/allinone.png";

const Benifits = () => {
  return (
    <Box>
      <Box sx={style.benifits}>
        <Typography sx={style.head}>OUR BENIFITS</Typography>
        <Typography sx={style.title}>Why choose us?</Typography>
        <Box sx={style.cards}>
          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={square} alt="" />
            </Box>
            <Typography sx={style.cTitle}>
              Financial Design Expertise
            </Typography>
            <Typography sx={style.desc}>
              We have an understanding of financial concepts and we get your
              design needs
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={dollar} alt="dollar " />
            </Box>
            <Typography sx={style.cTitle}>No Hidden Costs</Typography>
            <Typography sx={style.desc}>
              Transparent pricing! No hidden fees, just clear enchantment
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={fast} alt="fast " />
            </Box>
            <Typography sx={style.cTitle}>Fast Turnaround Times</Typography>
            <Typography sx={style.desc}>
              Swift sorcery! Get your designs quickly and with updates every 48
              or 72 hours.
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={stargroup} alt="stars" />
            </Box>
            <Typography sx={style.cTitle}>Wizard-Level Quality</Typography>
            <Typography sx={style.desc}>
              Crafted to perfection! Designs that captivate, build trust, and
              convert.
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={folder} alt="folder" />
            </Box>
            <Typography sx={style.cTitle}>Unique and Yours Forever</Typography>
            <Typography sx={style.desc}>
              Exclusive enchantments! Your designs are unique, and you retain
              full ownership.
            </Typography>
          </Box>

          <Box sx={style.card}>
            <Box sx={style.icon}>
              <img src={allinone} alt="all in on" />
            </Box>
            <Typography sx={style.cTitle}>
              All-In-One Design Solution
            </Typography>
            <Typography sx={style.desc}>
              We can offer a wide range of design solutions for your finance
              business.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Benifits;
