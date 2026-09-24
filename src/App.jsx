import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My React App</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" sx={{ mt: 4 }}>
          Добро пожаловать!
        </Typography>

        <Typography variant="body1" sx={{ mt: 2 }}>
          Это простое приложение с использованием Material UI.
        </Typography>

        <Button variant="contained" onClick={handleOpen} sx={{ mt: 3 }}>
          Открыть диалог
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Привет!</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Это диалоговое окно Material UI. Оно открывается при нажатии на
            кнопку.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default App;
