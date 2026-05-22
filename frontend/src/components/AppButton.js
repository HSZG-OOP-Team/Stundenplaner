import { Button } from "@mui/material";

export default function AppButton({ text, onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        color: "white",
        borderColor: "white",
        width: "65%",
        alignSelf: "center",
        py: 1,
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
            borderColor: "white",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
        },
      }}
    >
      {text}
    </Button>
  );
}