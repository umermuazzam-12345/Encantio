import { Box } from "@mui/material";
import ai from "../../../assets/images/ai.png";
import id from "../../../assets/images/id.png";
import ps from "../../../assets/images/ps.png";
import adobe from "../../../assets/images/adobe.png";
import figma2 from "../../../assets/images/figma2.png";
import random from "../../../assets/images/random.png";
import ppt from "../../../assets/images/ppt.png";
import word from "../../../assets/images/word.png";
import webflow2 from "../../../assets/images/webflow2.png";
import ad1 from "../../../assets/images/ad1.png";
import ad2 from "../../../assets/images/ad2.png";
import ad3 from "../../../assets/images/ad3.png";
import { style } from "./style";

const Advertisement = () => {
  return (
    <marquee>
      <Box sx={style.wrapper}>
        <Box sx={style.advertise}>
          <Box sx={style.imgBox}>
            <img src={ai} alt="" style={{ width: "100%", display: "block" }} />
          </Box>
          <Box sx={style.imgBox}>
            <img src={id} alt="" style={{ width: "100%", display: "block" }} />
          </Box>
          <Box sx={style.imgBox}>
            <img src={ps} alt="" style={{ width: "100%", display: "block" }} />
          </Box>
          <Box sx={style.imgBox}>
            <img
              src={adobe}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </Box>
          <Box sx={style.imgBox}>
            <img
              src={figma2}
              alt=""
              style={{ height: "100%", display: "block" }}
            />
          </Box>
          <Box sx={style.imgBox}>
            <img
              src={webflow2}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </Box>
          <Box sx={style.imgBox}>
            <img
              src={random}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </Box>
          <Box sx={style.imgBox}>
            <img src={ppt} alt="" style={{ width: "100%", display: "block" }} />
          </Box>
          <Box sx={style.imgBox}>
            <img
              src={word}
              alt=""
              style={{ width: "100%", display: "block" }}
            />
          </Box>

          <Box sx={style.imgGroup}>
            <Box sx={style.ad1}>
              <img
                src={ad1}
                alt=""
                style={{ width: "90%", display: "block" }}
              />
            </Box>
            <Box sx={style.ad2}>
              <img
                src={ad2}
                alt=""
                style={{ height: "90%", display: "block" }}
              />
            </Box>
            <Box sx={style.ad3}>
              <img
                src={ad3}
                alt=""
                style={{ width: "90%", height: "90%", display: "block" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </marquee>
  );
};

export default Advertisement;
