import React, { createRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Input } from "@mui/material";
import { Archivedlist, list, todo } from "./data";
import Modal from "react-modal";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Build, Delete, Unarchive } from "@mui/icons-material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
function Todolist({ mode }) {
  const [initialList, setInitialList] = useState(list);
  const [archiveList, setArchiveList] = useState(Archivedlist);
  const [toDo, settoDo] = useState(todo);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(-1);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (toDo.Title != "" && toDo.Description != "") {
      const list = [...initialList];
      const tdo = { ...toDo };
      if (updateFlag == -1) {
        tdo.CreatedAt = new Date();
        list.push(tdo);
      } else {
        list[updateFlag] = toDo;
      }
      setInitialList(list);
      settoDo(todo);
      setIsOpen(false);
      setUpdateFlag(-1);
    }
  };
  const deleteToDo = (index) => {
    const list = [...initialList];
    list.splice(index, 1);
    setInitialList(list);
  };
  const handleArchive = (index) => {
    const list = [...initialList];
    console.log(index);
    list[index].ArchiveAt = new Date();
    const archived = [...archiveList];
    archived.push(list[index]);
    list.splice(index, 1);
    setInitialList(list);
    setArchiveList(archived);
  };
  const handleunArchive = (index) => {
    const list = [...archiveList];
    console.log(index);
    list[index].ArchiveAt = "";
    const archived = [...initialList];
    archived.push(list[index]);
    list.splice(index, 1);
    setInitialList(archived);
    setArchiveList(list);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
    setUpdateFlag(-1);
    settoDo(todo);
    setIsOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle id="alert-dialog-title">
          {initialList[updateFlag]?.Title} Info
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Title:{initialList[updateFlag]?.Title}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            Description:{initialList[updateFlag]?.Description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <div>
            {updateFlag != -1 ? (
              <h2 style={{ color: "#1565c0" }}>Edit To-do</h2>
            ) : (
              <h2 style={{ color: "#1565c0" }}>Add To-do</h2>
            )}
          </div>
          <Input
            placeholder="Todo"
            inputProps={{
              "aria-label": "Description",
            }}
            value={toDo.Title}
            onChange={(e) => settoDo({ ...toDo, Title: e.target.value })}
            style={{ width: "80%", margin: "2rem" }}
          />
          <Input
            placeholder="Description"
            inputProps={{
              "aria-label": "Description",
            }}
            value={toDo.Description}
            onChange={(e) => settoDo({ ...toDo, Description: e.target.value })}
            style={{ width: "80%", margin: "2rem" }}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            style={{ width: "50%" }}
          >
            Add To-do
          </Button>
        </div>
      </Modal>
      <div
        style={
          mode
            ? { margin: "2rem", background: "white" }
            : { margin: "2rem", background: "black" }
        }
      >
        <Card
          sx={{ minWidth: 50 }}
          style={
            mode
              ? { margin: "2rem", background: "white" }
              : { margin: "2rem", background: "grey" }
          }
        >
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5" gutterBottom>
                To-Do List
              </Typography>
              <Button
                onClick={() => setIsOpen(true)}
                variant="contained"
                color="primary"
                style={{ width: "10%" }}
              >
                Add
              </Button>
            </div>

            <div>
              {initialList.map((list, index) => (
                <Card
                  sx={{ minWidth: 275 }}
                  key={index}
                  style={{ margin: "2rem 0" }}
                  onClick={() => {
                    handleClickOpen();
                    setUpdateFlag(index);
                  }}
                  style={
                    mode ? { background: "white" } : { background: "grey" }
                  }
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {list.Title}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {list.Description}
                        </Typography>
                      </div>
                      <div>
                        <IconButton
                          color="primary"
                          aria-label="Edit"
                          onClick={(e) => {
                            settoDo({
                              ...list,
                              Title: list.Title,
                              Description: list.Description,
                              CreatedAt: list.CreatedAt,
                            });
                            setUpdateFlag(index);
                            setIsOpen(true);
                            e.stopPropagation();
                          }}
                        >
                          <Build fontSize="small" />
                        </IconButton>
                        <IconButton
                          color="primary"
                          aria-label="Edit"
                          onClick={(e) => {
                            e.stopPropagation();

                            handleArchive(index);
                          }}
                        >
                          <ArchiveIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          aria-label="Delete"
                          onClick={(e) => {
                            e.stopPropagation();

                            deleteToDo(index);
                          }}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div>
              {archiveList.map((list, index) => (
                <Card
                  sx={{ minWidth: 275 }}
                  key={index}
                  style={{ margin: "2rem 0", background: "#f1eded" }}
                  onClick={() => {
                    handleClickOpen();
                    setUpdateFlag(index);
                  }}
                >
                  <CardContent>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {list.Title}
                        </Typography>
                      </div>
                      <div>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color="text.secondary"
                          gutterBottom
                        >
                          {list.Description}
                        </Typography>
                      </div>
                      <div>
                        <IconButton
                          color="primary"
                          aria-label="Edit"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleunArchive(index);
                          }}
                        >
                          <Unarchive fontSize="small" />
                        </IconButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Todolist;
