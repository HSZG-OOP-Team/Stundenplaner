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
        input: { color: "text.primary" },
        label: { color: "text.primary" },
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "divider" },
          "&:hover fieldset": { borderColor: "divider" },
          "&.Mui-focused fieldset": { borderColor: "primary.main" },
        },
      }}
    />
  );
}