import { Box, Typography } from "@mui/material";
import { style } from "./style";
import tom from "../../../assets/images/tom.png";
import usa from "../../../assets/images/usa.png";
import italy from "../../../assets/images/italy.png";
import argentina from "../../../assets/images/argentina.png";

const Comment = () => {
  return (
    <Box sx={style}>
      <Box className="gradient">
        <Box sx={style.comment}>
          <Box sx={style.commentator}>
            <img
              src={tom}
              alt="im tom"
              style={{ width: "-webkit-fill-available" }}
            />
          </Box>
          <Box sx={style.info}>
            <Typography sx={style.title}>
              I’m Tom, Brand & Web Designer
            </Typography>
            <Typography sx={style.desc}>
              Since 2018, I've collaborated with successful companies worldwide.
              <br /> <br />
              With a background in investment management and personal finances,
              my profound admiration for financial services businesses inspired
              the creation of Encantio. Dedicated to enhancing visual
              communication, we specialize in helping finance businesses build
              trust through impactful design.
            </Typography>
            <Box sx={style.btns}>
              <Typography sx={style.btn}>
                <img src={usa} alt="country badge" /> Born in USA
              </Typography>
              <Typography sx={style.btn}>
                <img src={italy} alt="country badge" /> Raised in Argentina
              </Typography>
              <Typography sx={style.btn}>
                <img src={argentina} alt="country badge" /> Living in Italy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Comment;
