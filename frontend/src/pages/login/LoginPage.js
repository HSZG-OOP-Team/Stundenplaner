import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  Link,
} from "@mui/material";

export default function LoginPage({ onForgotPassword }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#2f2f2f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 5,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "white",
          alignSelf: "flex-start",
          ml: 3,
          mb: 5,
        }}
      >
        Name_der_App
      </Typography>

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
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            border: "2px solid white",
            p: 1,
          }}
        >
          LOGIN
        </Typography>

        <TextField
          label="E-Mail"
          variant="outlined"
          InputLabelProps={{
            style: { color: "white" },
          }}
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

        <TextField
          label="Passwort"
          type="password"
          variant="outlined"
          InputLabelProps={{
            style: { color: "white" },
          }}
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

        <Link
            component="button"
            underline="hover"
            onClick={onForgotPassword}
            sx={{ color: "white" }}
        >
           Passwort vergessen
        </Link>

        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderColor: "white",
          }}
        >
          Login
        </Button>

        <Link
          href="#"
          underline="hover"
          sx={{ color: "white", textAlign: "center" }}
        >
          Registrieren
        </Link>
      </Paper>
    </Box>
  );
}