// import React from "react";
// import { NavLink } from "react-router-dom";

// const Test = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light ">
//       <div className="container">
//         <img
//           src="aaochale.png"
//           style={{ height: "70px", width: "70px", padding: "10px 10px" }}
//         />
//         <NavLink
//           className="navbar-brand"
//           style={{ fontSize: "25px", fontWeight: "bold" }}
//         >
//           Aaoo Chale
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item dropdown">
//               <NavLink
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//                 style={{ fontSize: "20px" }}
//               >
//                 Company
//               </NavLink>
//               <ul
//                 className="dropdown-menu"
//                 aria-labelledby="navbarDropdown"
//                 style={{ width: "20%" }}
//               >
//                 <li>
//                   <NavLink className="dropdown-item">AboutUs</NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="dropdown-item">OurTeam</NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="dropdown-item">OurSolution</NavLink>
//                 </li>
//                 <li>
//                   <NavLink className="dropdown-item">Career Opertunity</NavLink>
//                 </li>{" "}
//                 <li>
//                   <NavLink className="dropdown-item">
//                     Investors Relation
//                   </NavLink>
//                 </li>{" "}
//                 <li>
//                   <NavLink className="dropdown-item">Blog</NavLink>
//                 </li>
//               </ul>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 className="nav-link active"
//                 aria-current="page"
//                 style={{ fontSize: "20px" }}
//               >
//                 Support
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" style={{ fontSize: "20px" }}>
//                 Contact Us
//               </NavLink>
//             </li>

//             <li className="nav-item">
//               <NavLink
//                 className="nav-link disabled"
//                 href="#"
//                 tabIndex={-1}
//                 aria-disabled="true"
//                 style={{ fontSize: "20px" }}
//               >
//                 Free Download
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Test;
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./text.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default () => {
  return (
    <Swiper
      style={{ width: "60%" }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
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
            <Grid item xs={3}>
              <Item>
                <img src="car1.jpg" style={{ height: "25vh", width: "100%" }} />
                <h3 className="slide_heading">Gaurav Josghi</h3>
                <p className="slide_paragraph">
                  aug wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi
                  fiw tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w aug
                  wdiwtfwbfetyfb fi if wify9w fiwyg9ew giwtfd8tw dwtdugwfi fiw
                  tfwft87w fwitf87w fuwtdf87w tdfuw8 tfietf wuftw87ft9w
                  f9erdw87gtfc e8vietgfoeygu eofy9eryg 9y
                </p>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
