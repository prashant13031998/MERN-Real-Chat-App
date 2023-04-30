import React from "react";
import {
  FormControl,
  InputLabel,
  styled,
  InputBase,
  alpha,
  Box,
} from "@mui/material";
import { colors } from "../theme/colors";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    width: 343,
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    // width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
function CustomInput({ label, value, id, setValue, marginTop = 0 }) {
  return (
    <Box sx={{ marginTop: marginTop }}>
      <FormControl variant="standard">
        <InputLabel
          shrink
          htmlFor={id}
          style={{ fontWeight: "bold", color: colors.main }}
        >
          {label}
        </InputLabel>
        <BootstrapInput
          value={value}
          id={id}
          onChange={(e) => {
            console.lg(e.target.value);
          }}
        />
      </FormControl>
    </Box>
  );
}

export default CustomInput;
