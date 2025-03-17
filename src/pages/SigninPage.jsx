import { Box, Grid, colors } from '@mui/material';
import React, { useState } from 'react';
import SigninForm from '../components/Auth/SigninForm';
import SignupForm from '../components/Auth/SignupForm';

export const ScreenMode = {
  SIGN_IN: "SIGN_IN",
  SIGN_UP: "SIGN_UP"
};

const SigninPage = ({onSignIn}) => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState("unset");
  const [width, setWidth] = useState(0);
const img1 = "https://png.pngtree.com/background/20210716/original/pngtree-colorful-hello-summer-background-picture-image_1392293.jpg"
const img2 = "https://png.pngtree.com/background/20210716/original/pngtree-hello-summer-and-times-concept-design-with-florals-tropical-themes-picture-image_1368462.jpg"
  const [backgroundImage, setBackgroundImage] = useState(img1);
  const [currMode, setCurrMode] = useState(ScreenMode.SIGN_IN);

  const onSwitchMode = (mode) => {
    setWidth(100);

    const timeout1 = setTimeout(() => {
      setCurrMode(mode);
      setBackgroundImage(mode === ScreenMode.SIGN_IN ? img1 : img2);
    }, 1100);

    const timeout2 = setTimeout(() => {
      setLeft("unset");
      setRight(0);
      setWidth(0);
    }, 1200);

    const timeout3 = setTimeout(() => {
      setRight("unset");
      setLeft(0);
    }, 2500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  };

  return (
    <Grid container sx={{ 
      height: "100vh", 
      width: "100vw",
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      <Grid item xs={4} sx={{ 
        position: "relative", 
        padding: 3,
        bgcolor: "white",
        margin: 0
      }}>
        {
          currMode === ScreenMode.SIGN_IN ? (
            <SigninForm onSwitchMode={onSwitchMode} onSignIn={onSignIn} />
          ) : (
            <SignupForm onSwitchMode={onSwitchMode} />
          )
        }
        <Box sx={{
          position: "absolute",
          top: 0,
          left: left,
          right: right,
          width: `${width}%`,
          height: "100%",
          bgcolor: colors.grey[800],
          transition: "all 1s ease-in-out"
        }} />
      </Grid>
      <Grid item xs={8} sx={{
        position: "relative",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        margin: 0
      }}>
        <Box sx={{
          position: "absolute",
          top: 0,
          left: left,
          right: right,
          width: `${width}%`,
          height: "100%",
          bgcolor: colors.common.white,
          transition: "all 1s ease-in-out"
        }} />
      </Grid>
    </Grid>
  );
};

export default SigninPage;