"use client";
import {
  Stack,
  Paper,
  Typography,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
  Divider,
  Link,
  IconButton,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
} from "@mui/icons-material";

import theme from "../theme";
import { numbers, callNumber, sendWhatsAppMessage } from "@/utils";
import Image from "next/image";
import avatar from "./avatar.png";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack direction="column">
        <Stack m={2}>
          <Typography variant="h3" textAlign="center">
            Francisca Jimenez "Tati"
          </Typography>
        </Stack>

        <Stack justifyContent="center" alignItems="center">
          <Stack component={Paper} p={2} width="40%">
            <Stack direction="row" alignItems="center">
              <Image
                src={avatar}
                alt="avatar"
                height={200}
                width={200}
                style={{
                  borderRadius: "80%",
                }}
              />

              <Stack ml={2}>
                <Typography variant="body1">
                  Hola, padezco de Alzheimer y diabetes tipo 2, por lo que
                  preciso de medicación por favor ayúdame a regresar a mi casa.
                </Typography>
              </Stack>
            </Stack>

            <Stack mt={4}>
              <Typography variant="h5">Telefonos de contacto</Typography>

              <List
                sx={{
                  marginTop: "12px",
                  bgcolor: "background.paper",
                }}
              >
                {numbers.map((number, index) => (
                  <Stack>
                    <ListItem
                      key={number}
                      alignItems="center"
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      <Stack direction="row" spacing={1} width="180px">
                        <Typography>{index + 1}.</Typography>{" "}
                        <Link>{number}</Link>
                      </Stack>

                      <Stack spacing={1} direction="row" width="100px">
                        <IconButton
                          onClick={() => {
                            callNumber(number);
                          }}
                        >
                          <PhoneIcon />
                        </IconButton>

                        <IconButton
                          onClick={() => {
                            sendWhatsAppMessage(number);
                          }}
                        >
                          <WhatsAppIcon />
                        </IconButton>
                      </Stack>
                    </ListItem>

                    {index < numbers.length - 1 && (
                      <Divider variant="fullWidth" orientation="horizontal" />
                    )}
                  </Stack>
                ))}
              </List>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
