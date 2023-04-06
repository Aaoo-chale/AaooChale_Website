import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./profile.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Swiper
      style={{ width: "70%" }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true, backgroundColor: "red" }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      Autoplay={true}
    >
      <SwiperSlide>
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile1.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Kishan Tripathi</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile2.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Abhishek Jha</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile3.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Ankit Mishra</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile1.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Joshi</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile2.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Sandeep Surya</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Box sx={{ flexGrow: 1 }}>
          <Grid>
            <Grid item xs={12}>
              <Item>
                <img src="profile3.jpg" style={{ height: "30vh", width: "100%" }} />
                <h3 className="slide_heading">Ankit Mishra</h3>
                <p className="slide_paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}
