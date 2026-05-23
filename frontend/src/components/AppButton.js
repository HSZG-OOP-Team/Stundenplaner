import { Button } from "@mui/material";

export default function AppButton({ text, onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        color: "primary.contrastText",
        borderColor: "primary.main",
        width: "65%",
        alignSelf: "center",
        py: 1,
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
          borderColor: "primary.main",
          backgroundColor: "action.hover",
        },
      }}
    >
      {text}
    </Button>
  );
}