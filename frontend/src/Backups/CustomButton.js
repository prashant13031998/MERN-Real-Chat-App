import { Box, Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { colors } from "../theme/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: colors.main,
  //   backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
  width: 100,
}));

function CustomButton({ label, onClick, marginTop = 0 }) {
  return (
    <Box sx={{ marginTop: marginTop }}>
      <ColorButton variant="contained" onClick={onClick}>
        {label}
      </ColorButton>
    </Box>
  );
}

export default CustomButton;
