import { Typography, Box, Link } from "@mui/material";
import AppCard from "../../components/AppCard";

import AppInput from "../../components/AppInput";
import AppButton from "../../components/AppButton";

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

      <AppCard>

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

        <AppInput label="E-Mail" />

        <AppInput label="Passwort" type="password" />

        <Link
          component="button"
          underline="hover"
          onClick={onForgotPassword}
          sx={{ color: "white" }}
        >
          Passwort vergessen
        </Link>

        <AppButton text="Login" />

        <Link
          href="#"
          underline="hover"
          sx={{ color: "white", textAlign: "center" }}
        >
          Registrieren
        </Link>
      </AppCard>
    </Box>
  );
}