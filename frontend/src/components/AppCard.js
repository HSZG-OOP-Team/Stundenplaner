import { Paper } from "@mui/material";

export default function AppCard({ children }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 350,
        p: 4,
        backgroundColor: "#2f2f2f",
        border: "2px solid white",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {children}
    </Paper>
  );
}