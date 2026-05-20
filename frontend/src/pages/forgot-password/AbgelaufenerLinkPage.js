import { Button, Typography, Box, Paper } from "@mui/material";

export default function ExpiredLinkPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#2f2f2f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          alignSelf: "flex-start",
          ml: 2,
          mb: 2,
        }}
      >
        Name_der_App
      </Typography>

      <Box
        sx={{
          width: "100%",
          borderTop: "2px dashed white",
          mb: 3,
        }}
      />

      <Paper
        elevation={0}
        sx={{
          width: 350,
          minHeight: 430,
          p: 1,
          backgroundColor: "#2f2f2f",
          border: "2px solid white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            textAlign: "center",
            border: "2px solid white",
            width: "90%",
            py: 2,
            mt: 1,
            mb: 4,
          }}
        >
          Passwort ändern
        </Typography>

        <Typography
          sx={{
            color: "white",
            mb: 4,
            mt: 1,
          }}
        >
          Bestätigungslink abgelaufen
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
            width: "65%",
          }}
        >
          Mail erneut senden
        </Button>
      </Paper>
    </Box>
  );
}