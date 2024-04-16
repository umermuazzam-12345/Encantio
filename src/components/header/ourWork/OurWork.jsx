import { Box } from "@mui/material";
import Button from "../../common/Button";
import { style } from "./style";
import stars from "../../../assets/images/stars.png";
import work from "../../../assets/images/ourWork.png";
import Slider from "../../slider/Slider";

const OurWork = () => {
  return (
    <Box>
      <Box sx={style.ourWork}>
        <Button text="Lets work together" />
        <Box sx={style.trustedBy}>
          <Box sx={style.star} component={"span"}>
            <img src={stars} alt="Star rating" />
          </Box>
          <Box
            component={"span"}
            sx={{ ml: { lg: "10px", md: "8px", xs: "6px" } }}
          >
            Trusted by 10+ businesses
          </Box>
        </Box>
        <Box sx={style.workLogo}>
          <img src={work} alt="Our Work" />
        </Box>
        <Box>
          <Slider />
        </Box>
      </Box>
    </Box>
  );
};

export default OurWork;
