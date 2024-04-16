import { Box } from "@mui/material";
import { style } from "./style";

const Button = ({ text }) => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.btn}>{text}</Box>
    </Box>
  );
};

export default Button;
