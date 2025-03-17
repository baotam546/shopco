import { Container, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import img1 from '../assets/img/new1.png'; 
import img2 from '../assets/img/new2.png'; 
import img3 from '../assets/img/new3.png'; 
import img4 from '../assets/img/new4.png'; 
const products = [
  {
    id: 1,
    name: 'Gel Rửa Mặt Cho Da Dầu Mụn SVR Sebiaclear Gel Moussant',
    originalPrice: 380000,
    salePrice: 325000,
    image:img1,
    images: [img1, img2, img3, img4],
    rating: 4.5,
    ratingCount: 157,
    soldCount: 200,
    capacity: '50g',
    category: 'Sữa rửa mặt',
    brand: 'SVR',
    skinType: 'Da Dầu'
  },
  {
    id: 2,
    name: 'Sữa Rửa Mặt La Roche-Posay Effaclar Purifying',
    originalPrice: 420000,
    salePrice: 395000,
    image:img2,
    images: [img1, img2, img3, img4],
    rating: 4.8,
    ratingCount: 235,
    soldCount: 450,
    capacity: '200ml',
    category: 'Sữa rửa mặt',
    brand: 'La Roche-Posay',
    skinType: 'Da Nhờn'
  },
  {
    id: 3,
    name: 'Sữa Rửa Mặt Cerave Hydrating Cleanser',
    originalPrice: 350000,
    salePrice: 299000,
    image:img3,
    images: [img1, img2, img3, img4],
    rating: 4.6,
    ratingCount: 189,
    soldCount: 320,
    capacity: '236ml',
    category: 'Sữa rửa mặt',
    brand: 'Cerave',
    skinType: 'Da Khô'
  },
  {
    id: 4,
    name: 'Sữa Rửa Mặt Cosrx Low pH Good Morning Gel Cleanser',
    originalPrice: 250000,
    salePrice: 220000,
    image:img4,
    images: [img1, img2, img3, img4],
    rating: 4.7,
    ratingCount: 412,
    soldCount: 850,
    capacity: '150ml',
    category: 'Sữa rửa mặt',
    brand: 'Cosrx',
    skinType: 'Mọi loại da'
  },
  {
    id: 5,
    name: 'Sữa Rửa Mặt Innisfree Green Tea Foam Cleanser',
    originalPrice: 280000,
    salePrice: 245000,
    image:img1,
    images: [img1, img2, img3, img4],
    rating: 4.4,
    ratingCount: 167,
    soldCount: 280,
    capacity: '150ml',
    category: 'Sữa rửa mặt',
    brand: 'Innisfree',
    skinType: 'Da Thường'
  },
  {
    id: 6,
    name: 'Sữa Rửa Mặt Simple Kind To Skin Refreshing',
    originalPrice: 150000,
    salePrice: 129000,
    image:img2,
    images: [img1, img2, img3, img4],
    rating: 4.3,
    ratingCount: 298,
    soldCount: 520,
    capacity: '150ml',
    category: 'Sữa rửa mặt',
    brand: 'Simple',
    skinType: 'Da Nhạy Cảm'
  }
];
export default function  TopSelling() {
    return (
      <Container sx={{ py: 5, maxWidth: "100%" }}>
        <Typography variant="h2" fontWeight="bold" style={{color:"black", fontFamily:"inherit"}} textAlign="center">TOP SELLING</Typography>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          {products?.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }