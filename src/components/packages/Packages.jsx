import { Box, Typography } from "@mui/material";
import { style } from "./style";
import tick from "../../assets/images/tick.png";
import ultratick from "../../assets/images/ultratick.png";
import ultrastars from "../../assets/images/ultrastars.png";
import Payment from "./payment/Payment";
import Comment from "./comment/Comment";
import Priority from "./priority/Priority";

const Packages = () => {
  return (
    <Box sx={style.wrapper}>
      <Box sx={style.blur}></Box>
      <Box sx={style.packages}>
        <Typography sx={style.head}>PACKAGES</Typography>
        <Typography sx={style.title}>
          Ready to invest in your company?
        </Typography>
        <Box sx={style.cards}>
          {/* card 1 */}
          <Box className="card_1" sx={style.card}>
            <Typography sx={style.cTitle}>
              Web Design Enchanted Package
            </Typography>
            <Typography sx={style.desc}>
              Ideal for businesses in need of a reliable and high-converting
              website
            </Typography>
            <Box sx={style.btn}>Get started now</Box>
            <Typography sx={style.spots}>
              2 spots available for April
            </Typography>
            <Typography sx={style.devider}>
              <Typography sx={style.line}></Typography>
            </Typography>
            <Typography sx={style.whatGet}>What you get:</Typography>
            <Box sx={style.list}>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                2 to 4-week delivery{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Updates every 48/72 hours{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Custom web design{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Web development in Webflow{" "}
              </Typography>
              <Typography sx={style.item} mb="34px">
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Copywriting for your website{" "}
              </Typography>

              <Typography sx={style.devider}>
                <Typography sx={style.line}></Typography>
              </Typography>
            </Box>
            <Typography sx={style.guarantee}>
              <img
                src={ultratick}
                alt="ultra tick mark"
                style={{ marginRight: "12px" }}
              />{" "}
              100% refund guarantee
            </Typography>
          </Box>

          {/* card 2 */}
          <Box className="card_2" sx={style.card}>
            <Typography sx={style.badge}>MOST POPULAR</Typography>
            <Typography sx={style.cTitle}>
              Branding & Web Spell Package
            </Typography>
            <Typography sx={style.desc}>
              Ideal for businesses in need of a reliable and high-converting
              website
            </Typography>
            <Typography sx={style.btn}>Get started now</Typography>
            <Typography sx={style.spots}>
              2 spots available for April
            </Typography>
            <Typography sx={style.devider}>
              <Typography sx={style.line} margin={"auto"}></Typography>
            </Typography>
            <Typography sx={style.whatGet}>What you get:</Typography>
            <Box sx={style.list}>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                2 to 4-week delivery{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Updates every 48/72 hours{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Custom web design{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Web development in Webflow{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Copywriting for your website{" "}
              </Typography>

              <Typography sx={style.item}>
                <img
                  src={ultrastars}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                High-converting copywriting
              </Typography>

              <Box sx={style.item}>
                <Typography
                  sx={{
                    borderRadius: "6px",
                    border: "solid 1px #d782ff",
                    p: "4px 12px",
                    color: "#fff",
                    fontSize: "10px",
                    display: "inline-block",
                    marginLeft: "30px",
                  }}
                >
                  For limited time only!
                </Typography>
              </Box>

              <Typography sx={style.devider}>
                <Typography sx={style.line} margin={"auto"}></Typography>
              </Typography>
            </Box>
            <Typography sx={style.guarantee}>
              <img
                src={ultratick}
                alt="ultra tick mark"
                style={{ marginRight: "12px" }}
              />{" "}
              100% refund guarantee
            </Typography>
          </Box>

          {/* card 3 */}
          <Box className="card_3" sx={{ flex: "1.25" }}>
            <Box sx={style.card}>
              <Typography sx={style.cTitle}>
                Web Design Enchanted Package
              </Typography>
              <Typography sx={style.desc}>
                Ideal for businesses in need of a reliable and high-converting
                website Ideal for businesses
              </Typography>

              <Box sx={style.tags}>
                <Typography sx={style.tag}>Digital ads</Typography>
                <Typography sx={style.tag}>Digital reports </Typography>
                <Typography sx={style.tag}>Infographics</Typography>
                <Typography sx={style.tag}>Slide decks</Typography>
                <Typography sx={style.tag}>Pitch decks</Typography>
                <Typography sx={style.tag}>And more...</Typography>
              </Box>

              <Typography sx={style.devider}>
                <Typography sx={style.line}></Typography>
              </Typography>

              <Typography sx={style.request}>Request for a quote</Typography>
            </Box>

            {/* card 4  */}
            <Box className="lastCard" sx={style.card} mt={"28px"}>
              <Typography sx={style.addOn}>All Done For You Add-On</Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Updates every 48/72 hours{" "}
              </Typography>
              <Typography sx={style.item}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Custom web design{" "}
              </Typography>
              <Typography sx={style.item} mb={"16px"}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Web development in Webflow{" "}
              </Typography>
              <Typography sx={style.item} mt={"-16px"}>
                <img
                  src={tick}
                  alt="tick mark"
                  style={{ marginRight: "12px" }}
                />{" "}
                Copywriting for your website{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* payment component  */}
      <Payment />

      {/* comment component  */}
      <Comment />

      {/* priority component  */}
      <Priority />
    </Box>
  );
};

export default Packages;
