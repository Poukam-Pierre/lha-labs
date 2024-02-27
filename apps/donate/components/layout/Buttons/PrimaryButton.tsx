import { Box, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ButtonsProps {
  label: ReactNode;
}

const PrimaryButton: React.FC<ButtonsProps> = ({ label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "15px 36px",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        borderRadius: "50px",
        background: "var(--Primary, #A50000)",
      }}
    >
      <Typography
        sx={{
          color: "var(--off-white, #FFF)",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "18px",
          cursor: "pointer",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};
export default PrimaryButton;
