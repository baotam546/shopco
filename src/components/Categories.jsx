import { Grid, Typography, Paper, Stack } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CompareIcon from "@mui/icons-material/Compare";
import PropTypes from 'prop-types';
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

const categories = [
  { title: "Voucher", icon: <LocalOfferIcon fontSize="medium" /> },
  { title: "Giao hàng", icon: <LocalShippingIcon fontSize="medium" /> },
  { title: "So sánh sản phẩm", icon: <CompareIcon fontSize="medium" /> },
  { title: "Đổi hàng dễ dàng", icon: <AssignmentReturnIcon fontSize="medium" /> },
];

export default function Categories() {
  return (
    <Grid container spacing={2} justifyContent="center" pl={2} pr={2} sx={{ py: 3, bgcolor: "black", color: "white", textAlign: "center" }}>
      {categories.map((category, index) => (
        <CategoryItem key={index} title={category.title} icon={category.icon} />
      ))}
    </Grid>
  );
}

const CategoryItem = ({ title, icon }) => {
  return (
    <Grid item xs={6} sm={3}>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          bgcolor: "grey.900",
          color: "white",
          transition: "0.3s",
          "&:hover": { bgcolor: "grey.700", transform: "scale(1.03)" },
        }}
      >
        <Stack spacing={1} alignItems="center">
          {icon}
          <Typography variant="body2" fontWeight="bold">
            {title}
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
};

CategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
