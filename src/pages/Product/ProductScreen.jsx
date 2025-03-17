import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import ProductDetail from "./ProductDetail";

export default function ProductScreen() {
  return (
    <Box sx={{ width: "99vw", overflowX: "hidden", backgroundColor: '#f8f8f8' }}>
      <Header />
      <ProductDetail />
      <Footer />
    </Box>
  );
} 