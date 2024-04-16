import { Box, Typography } from "@mui/material";
import { style } from "./style";
import tick from "../../../assets/images/ultratick2.png";
import S from "../../../assets/images/S.png";

const Payment = () => {
  return (
    <Box sx={style}>
      <Box sx={style.wrapper}>
        <Box sx={style.payment}>
          <img className="img" src={tick} alt="payment done" />
          <Box sx={style.title}>
            <Box component={"span"}> Design Spell Guarantee - </Box>
            <Box sx={style.colorText} component={"span"}>
              No Risk On You
            </Box>
          </Box>
          <Typography sx={style.desc}>
            If our enchanted brand & web wizardry doesn't cast its spell on you
            in 2 weeks, we'll conjure up a full refund.
          </Typography>
        </Box>
      </Box>
      <Box sx={style.textBtm}>
        <img src={S} alt="stripe" /> Payment securely done via Stripe
      </Box>
    </Box>
  );
};

export default Payment;
