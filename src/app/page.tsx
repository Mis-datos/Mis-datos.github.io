"use client";

import {
  Stack,
  Paper,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import theme from "../theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column">
        <Typography variant="h3" textAlign="center">
          Mis datos
        </Typography>

        <Stack justifyContent="center" alignItems="center">
          <Stack component={Paper} p={2} width="50%">
            <Typography variant="body1">
              Hola, mi nombre es Francisca Jimenez
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
