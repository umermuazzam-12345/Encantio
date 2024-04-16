import { style } from "./style";
import spot from "../../../assets/images/spot.png";
import { Box, Typography } from "@mui/material";
import client from "../../../assets/images/clientEncantio.png";
import you from "../../../assets/images/you.png";

const Hero = () => {
  return (
    <Box sx={style.wrapper}>
      <Box>
        <Box sx={style.spot}>
          <img src={spot} alt="spots" />
          <Typography component="span">Spots available</Typography>
        </Box>
        <Box>
          <Typography sx={style.head1} variant="h1">
            Reliable Website to Help You
          </Typography>
          <Typography sx={style.head2} variant="h1">
            Convert Visitors Into Clients
            <Box sx={style.client}>
              <img src={client} />
            </Box>
          </Typography>
        </Box>
        <Box sx={style.desc}>
          <Typography sx={style.myDesc} component={"span"}>
            Transforming finance businesses into market leaders
          </Typography>
          <Typography component={"span"} sx={style.desc2}>
            through expert branding and web design
            <Typography sx={style.you}>
              <img src={you} alt="" />
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
