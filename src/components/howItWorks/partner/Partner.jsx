import { Box, Chip, Typography } from "@mui/material";
import { style } from "./style";

const Partner = () => {
  return (
    <Box sx={style.partner}>
      <Typography sx={style.title}>Who do we best partner with?</Typography>
      <Box sx={style.tags}>
        <Chip sx={style.Chip} label="Financial services businesses" />
        <Chip label="Financial advisement companies" />
        <Chip label="Investment firms" />
        <Chip label="Startups in wealth creation" />
        <Chip label="Fintech startups" />
        <Chip label="Financial education platforms" />
        <Chip label="Investment firms" />
        <Chip label="Venture capital firms" />
        <Chip label="Financial influencers" />
        <Chip label="Individual financial advisors" />
        <Chip label="Financial consultants" />
      </Box>
    </Box>
  );
};

export default Partner;
