import { Box, Divider } from "@mui/material";
import Header from "../components/Header"
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import NewArrivals from "../components/NewArrivals";
import TopBrand from "../components/TopBrand";
import Footer from "../components/Footer/Footer";


export default function MainScreen() {
  return (
    <Box sx={{ width: "99vw", overflowX: "hidden" }}>
      <Header />
      <Banner />
      <Categories />
      <TopBrand />
      <NewArrivals />
      <Divider sx={{ mx: 10, my: 3 }} />     
      <Footer />
    </Box>
  );
}
