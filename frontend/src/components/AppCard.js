import { Paper } from "@mui/material";

export default function AppCard({ children }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: 350,
        p: 4,
        backgroundColor: "background.paper",
        border: "2px solid",
        borderColor: "divider",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {children}
    </Paper>
  );
}