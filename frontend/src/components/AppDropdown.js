import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function AppDropdown({ label, value, onChange, options = [] }) {
  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        label: { color: "text.primary" },
        "& .MuiOutlinedInput-root": {
          color: "text.primary",
          "& fieldset": { borderColor: "divider" },
          "&:hover fieldset": { borderColor: "divider" },
          "&.Mui-focused fieldset": { borderColor: "primary.main" },
        },
        "& .MuiSvgIcon-root": {
          color: "text.primary",
        },
      }}
    >
      <InputLabel>{label}</InputLabel>

      <Select
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}