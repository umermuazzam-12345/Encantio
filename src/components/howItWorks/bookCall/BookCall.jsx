import { Box, Typography, Button } from "@mui/material";
import { style } from "./style";

const BookCall = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.book}>
        <Typography sx={style.title}>One click away from building a</Typography>
        <Typography sx={style.cTitle}> market-leading brand</Typography>
        <Button sx={style.btn}> Book a free call now</Button>
      </Box>
    </Box>
  );
};

export default BookCall;
