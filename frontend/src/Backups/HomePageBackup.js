// import React, { useState } from "react";
// import { Box, Grid, Card, Typography } from "@mui/material";
// import CustomInput from "../components/CustomInput";
// import { colors } from "../theme/colors";
// import CustomButton from "../components/CustomButton";
// import CustomToggleButton from "../components/CustomToggleButton";

// const HomePage = () => {
//   const [toggleValue, setToggleValue] = useState("login");
//   const handleToggleChange = (value) => {
//     setToggleValue(value);
//   };
//   return (
//     <Box sx={{ height: "100vh" }}>
//       <Grid container sx={{ height: "100%" }}>
//         <Grid item xs={12} md={6} lg={6}>
//           <Box
//             sx={{
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box sx={{ marginBottom: 2 }}>
//               <Typography
//                 variant="h3"
//                 component="h4"
//                 fontWeight={"bold"}
//                 style={{ color: colors.main }}
//               >
//                 Real Chat
//               </Typography>
//             </Box>

//             <Card
//               sx={{
//                 paddingX: 2,
//                 paddingY: 2,
//                 width: 400,
//                 border: `2px solid ${colors.main}`,
//                 borderRadius: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <CustomToggleButton
//                   onChange={handleToggleChange}
//                   value={toggleValue}
//                 />

//                 <CustomInput
//                   value={""}
//                   setValue={() => {}}
//                   id="email-input"
//                   label="Email *"
//                 />
//                 <CustomInput
//                   value={""}
//                   setValue={() => {}}
//                   id="password-input"
//                   label="Password *"
//                   marginTop={2}
//                 />
//                 <CustomButton label="Login" marginTop={2} />
//               </Box>
//             </Card>
//           </Box>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           md={6}
//           lg={6}
//           sx={{ display: "flex", alignItems: "center" }}
//         >
//           <Box>
//             <img
//               alt="home_image"
//               src={require("../assets/img/chat_home_page.png")}
//             />
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default HomePage;
