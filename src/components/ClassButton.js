import { useState } from "react";
import { useDispatch } from "react-redux";
import { createClass } from "../store/actions/classActions";
// Styling
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function FormDialog() {
  const dispatch = useDispatch();

  const [newClass, setNewClass] = useState({
    name: "",
    availableSeats: "",
    bookedSeats: "",
    price: "",
    date: "",
    time: "",
    gymId: 1,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    dispatch(createClass(newClass));
    handleClose();
  };

  const handleChange = (event) => {
    setNewClass({ ...newClass, [event.target.name]: event.target.value });
  };

  console.log("Class Test", newClass);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD CLASS
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Gym</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            name="name"
            value={newClass.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="availableSeats"
            label="Available Seats"
            fullWidth
            name="availableSeats"
            type="integer"
            value={newClass.availableSeats}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            fullWidth
            name="price"
            type="integer"
            value={newClass.price}
            onChange={handleChange}
          />
          <TextField
            name="date"
            type="date"
            id="date"
            fullWidth
            value={newClass.date}
            onChange={handleChange}
          />
          <TextField
            name="time"
            type="time"
            id="time"
            className="form-control"
            fullWidth
            value={newClass.time}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreate} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
