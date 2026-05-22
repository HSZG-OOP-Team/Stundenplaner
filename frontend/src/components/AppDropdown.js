import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function AppDropdown({ label, value, onChange, options = [] }) {
  return (
    <FormControl
      fullWidth
      size="small"
      sx={{
        label: { color: "white" },
        "& .MuiOutlinedInput-root": {
          color: "white",
          "& fieldset": { borderColor: "white" },
          "&:hover fieldset": { borderColor: "white" },
          "&.Mui-focused fieldset": { borderColor: "white" },
        },
        "& .MuiSvgIcon-root": {
          color: "white",
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