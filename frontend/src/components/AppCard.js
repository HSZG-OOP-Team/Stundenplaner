import { Paper } from "@mui/material";

export default function AppCard({ children, sx = {}}) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 4,
        backgroundColor: "background.paper",
        border: "2px solid",
        borderColor: "divider",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        ...sx
      }}
    >
      {children}
    </Paper>
  );
}