import { Box, Typography } from "@mui/material";
import { style } from "./style";

const Priority = () => {
  return (
    <Box sx={style}>
      <Box className="gradient">
        <Box sx={style.priority}>
          <Typography sx={style.title}>
            Your success is not just a goal,{" "}
            <Box sx={style.txtColor}>it’s our top priority</Box>
          </Typography>
          <Typography sx={style.desc}>
            {" "}
            To ensure quality work, we work with a limited amount of clients per
            month. <br /> Secure your spot for dedicated attention and
            exceptional results.
          </Typography>
          <Typography sx={style.btn}>Secure my spot</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Priority;
