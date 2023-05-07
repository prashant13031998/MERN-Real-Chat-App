import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";
import { colors } from "../theme/colors";

function CustomToggleButton({ onChange, value }) {
  return (
    <Box sx={{ paddingY: 2 }}>
      <ToggleButtonGroup
        value={value}
        exclusive
        onChange={(event) => {
          onChange(event.target.value);
        }}
        aria-label="Platform"
        sx={{
          backgroundColor: colors.main,
        }}
      >
        <ToggleButton
          value="login"
          sx={{
            color: colors.white,
            paddingX: 5,
          }}
        >
          Login
        </ToggleButton>
        <ToggleButton value="signup" sx={{ color: colors.white, paddingX: 5 }}>
          Signup
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default CustomToggleButton;
