import { Box, Typography } from "@mui/material";
import { style } from "./style";
import stars from "../../../assets/images/stars.png";
import jason from "../../../assets/images/jason.png";
import piero from "../../../assets/images/piero.png";
import tomas from "../../../assets/images/tomas.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Testimonials = () => {
  return (
    <Box sx={style.testimonial}>
      <Typography sx={style.title}>What our clients have to say?</Typography>
      <Box sx={style.tCards}>
        <Swiper
          slidesPerView={3}
          loop
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <Box sx={style.card}>
              <Box sx={style.stars}>
                <img height={"16px"} src={stars} alt="rating stars" />
              </Box>
              <Typography sx={style.desc}>
                “What sets Encantio apart is their commitment to excellence and
                their ability to translate abstract ideas into visually
                appealing and effective designs.”
              </Typography>
              <Box sx={style.profile}>
                <img src={jason} alt="rating stars" />
                <Typography sx={style.info}>
                  <Typography sx={style.name}>Jason</Typography>
                  <Typography sx={style.role}>
                    CEO & Founder @ PackageMyApps
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={style.card}>
              <Box sx={style.stars}>
                <img height={"16px"} src={stars} alt="rating stars" />
              </Box>
              <Typography sx={style.desc}>
                “Working with Encantio is exceptional. The processes are highly
                satisfactory, and the end results truly represent both me and my
                company. Highly recommended!"
              </Typography>
              <Box sx={style.profile}>
                <img src={piero} alt="piero" />
                <Typography sx={style.info}>
                  <Typography sx={style.name}>Piero</Typography>
                  <Typography sx={style.role}>
                    Founder & Director @ Arteo
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={style.card}>
              <Box sx={style.stars}>
                <img src={stars} height={"16px"} alt="rating stars" />
              </Box>
              <Typography sx={style.desc}>
                “Encantio was easy to work with and always went above and beyond
                to make sure our team was always satisfied. The service helped
                you.”
              </Typography>
              <Box sx={style.profile}>
                <img src={tomas} alt="tomas " />
                <Typography sx={style.info}>
                  <Typography sx={style.name}>Tomas</Typography>
                  <Typography sx={style.role}>
                    Founder @ Synrgy Athletics
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box sx={style.card}>
              <Box sx={style.stars}>
                <img height={"16px"} src={stars} alt="rating stars" />
              </Box>
              <Typography sx={style.desc}>
                “Working with Encantio is exceptional. The processes are highly
                satisfactory, and the end results truly represent both me and my
                company. Highly recommended!"
              </Typography>
              <Box sx={style.profile}>
                <img src={piero} alt="piero" />
                <Typography sx={style.info}>
                  <Typography sx={style.name}>Piero</Typography>
                  <Typography sx={style.role}>
                    Founder & Director @ Arteo
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Testimonials;
