import { Box } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer/Footer";
import CategoryContent from "../../components/CategoryContent";

export default function CategoryScreen() {
  return (
    <Box sx={{ width: "99vw", overflowX: "hidden" }}>
      <Header />
      <CategoryContent />
      <Footer />
    </Box>
  );
} 