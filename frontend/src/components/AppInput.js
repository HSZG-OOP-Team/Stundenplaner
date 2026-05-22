import { TextField } from "@mui/material";

export default function AppInput({ label, type = "text" }) {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      size="small"
      fullWidth
      sx={{
        input: { color: "white" },
        label: { color: "white" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
      }}
    />
  );
}