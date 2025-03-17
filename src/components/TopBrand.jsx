import React from 'react';
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './TopBrand.css';

const TopBrand = () => {
  const navigate = useNavigate();

  const handleBrandClick = (brandName) => {
    navigate(`/brand/${brandName}`);
  };

  // Danh sách 12 thương hiệu
  const brands = [
    { id: 1, name: "L'Oreal", image: "/images/L'OrealParis.png" },
    { id: 2, name: "La Roche-Posay", image: "/images/LaRoche.png" },
    { id: 3, name: "CeraVe", image: "/images/CeraVe.png" },
    { id: 4, name: "Bioderma", image: "/images/Bioderma.jpg" },
    { id: 5, name: "Paula's Choice", image: "/images/Paula's.png" },
    { id: 6, name: "Vichy", image: "/images/Vichy.jpg" },
    { id: 7, name: "Neutrogena", image: "/images/Neutrogena.jpg" },
    { id: 8, name: "Garnier", image: "/images/Garnier.jpg" },
    { id: 9, name: "Avène", image: "/images/Avène.jpg" },
    { id: 10, name: "Olay", image: "/images/Olay.jpg" },
    { id: 11, name: "Laneige", image: "/images/Laneige.png" },
    { id: 12, name: "Obagi Medical", image: "/images/Obagi.jpg" }
  ];

  return (
    <Box 
      sx={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        p: { xs: 2, sm: 4 },
        my: 4
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          textAlign: "center",
          borderRadius: "20px",
          width: "100%",
          backgroundColor: "#F5F5F5",
          boxShadow: 2,
        }}
      >
        <Typography 
          variant="h4" 
          fontWeight="bold" 
          gutterBottom
          sx={{ 
            mb: { xs: 3, sm: 4 },
            fontSize: { xs: "1.5rem", sm: "2rem" }
          }}
        >
          TOP BRAND
        </Typography>
        <Grid 
          container 
          spacing={2}
          sx={{ 
            alignItems: "center", 
            justifyContent: "center" 
          }}
        >
          {brands.map((brand) => (
            <Grid 
              key={brand.id} 
              item 
              xs={6} 
              sm={4}
              md={3}
              lg={2}
              sx={{ 
                display: "flex", 
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Box 
                className="brand-box"
                onClick={() => handleBrandClick(brand.name)}
                sx={{ 
                  position: "relative", 
                  width: "100%",
                  maxWidth: "160px",
                  aspectRatio: "1",
                  m: 1,
                  borderRadius: "8px",
                  overflow: "hidden",
                  bgcolor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  style={{ 
                    maxWidth: "80%", 
                    maxHeight: "80%",
                    objectFit: "contain"
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TopBrand;