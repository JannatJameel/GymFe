import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGym } from "../store/actions/gymActions";
// Styling
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
    const dispatch = useDispatch();
    const [gym, setGym] = useState({
      name: "",
      location: ""
    });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    dispatch(createGym(gym));
    handleClose();
  };

  const handleChange = (event) => {
    setGym({ ...gym, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        ADD GYM
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
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
            value={gym.name}
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            fullWidth
            name="location"
            value={gym.location}
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
