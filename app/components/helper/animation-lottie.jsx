// Wrapper around lottie-react that auto-plays a passed animation JSON.
"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  // Default Lottie config: looping autoplay using the supplied animation data.
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;