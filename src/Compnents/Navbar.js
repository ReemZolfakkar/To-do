import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function Navbar({ mode, setMode }) {
  const handleChange = () => {
    setMode(!mode);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    defaultChecked
                    color="default"
                    checked={mode}
                    onChange={handleChange}
                  />
                }
                label={mode ? "Light mode" : "Dark mode"}
              />
            </FormGroup>
          </Typography>

          <Button color="inherit">Weather</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
