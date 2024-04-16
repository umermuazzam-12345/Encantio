import { Box, Typography } from "@mui/material";
import { style } from "./style";
import agora from "../../../assets/images/agora.png";
import arteo from "../../../assets/images/arteo.png";
import pack from "../../../assets/images/myAppLogo.png";
import prospedge from "../../../assets/images/prospedge.png";
import athletics from "../../../assets/images/athletics.png";

const TrustedBy = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={{ textAlign: "center", display: { sm: "none", xs: "block" } }}>
        <Typography sx={style.recentWork}>View recent Work</Typography>
      </Box>

      <Box sx={style.title}>TRUSTED BY</Box>
      <Box sx={style.logos}>
        <Box varient="span" component="span">
          {" "}
          <img src={agora} alt="" />
        </Box>

        <Box varient="span" component="span">
          {" "}
          <img src={arteo} alt="" />
        </Box>

        <Box varient="span" component="span">
          {" "}
          <img src={pack} alt="" />
        </Box>

        <Box varient="span" component="span">
          {" "}
          <img src={prospedge} alt="" />
        </Box>

        <Box varient="span" component="span">
          {" "}
          <img src={athletics} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedBy;
