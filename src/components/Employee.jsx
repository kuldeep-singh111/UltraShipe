import React, { useState } from "react";
import { Grid, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField,IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Flag as FlagIcon } from "@mui/icons-material";
import { blue, green, red } from "@mui/material/colors";


function Employee() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Nick', email: 'nick@gmail.com', position: 'Founder', department: 'HR', flagged: false },
    { id: 2, name: 'Kuldeep', email: 'kuldeep@gmail.com', position: 'Software Developer', department: 'IT', flagged: false },
    { id: 3, name: 'Anjali', email: 'anjali@gmail.com', position: 'Software Developer', department: 'IT', flagged: false },
    { id: 4, name: 'Joy', email: 'joy@gmail.com', position: 'Accountant', department: 'Finance', flagged: false },
    { id: 5, name: 'Tondey', email: 'tondey@gmail.com', position: 'Manager', department: 'HR', flagged: false },
    { id: 6, name: 'Trum', email: 'trun@gmail.com', position: 'Designer', department: 'IT', flagged: false },
    { id: 7, name: 'Doy', email: 'doy@gmail.com', position: 'Web Developer', department: 'IT', flagged: false },
    { id: 8, name: 'Rahul', email: 'rahul@gmail.com', position: 'App Developer', department: 'IT', flagged: false },
    { id: 9, name: 'Tanvi', email: 'tanvi@gmail.com', position: 'Game Developer', department: 'IT', flagged: false },
    { id: 10, name: 'Aaliya', email: 'aaliya@gmail.com', position: 'Blockchain Developer', department: 'IT', flagged: false },
  ]);

  const [editEmployee, setEditEmployee] = useState(null);

  const handleTileClick = (employee) => setSelectedEmployee(employee);

  const handleClose = () => setSelectedEmployee(null);

  const handleDelete = (id) => {
    setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
  };

  const handleEditClick = (employee) => {
    setEditEmployee({ ...employee });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSave = () => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editEmployee.id ? editEmployee : employee
      )
    );
    setEditEmployee(null);
  };

  const handleFlag = (id) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === id ? { ...employee, flagged: !employee.flagged } : employee
      )
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={employee.id}>
            <Paper
              elevation={3}
              onClick={() => handleTileClick(employee)}
              sx={{ backgroundColor: employee.flagged ? "#ffeb3b" : "inherit" ,  position: "relative",
                borderRadius: 4,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#e0f7fa",
                },}}
              style={{ padding: "16px", cursor: "pointer" }}
            >
              <h3 style={{ color: blue[800], marginBottom: 8 }}>{employee.name}</h3>
              <p style={{ color: blue[600], fontSize: 14 }}>{employee.email}</p>
              <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleEditClick(employee); }}  sx={{ "&:hover": { color: blue[800] } }}>
              <EditIcon />
              </Button>
              <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleFlag(employee.id); }}      sx={{ color: green[600], "&:hover": { color: green[800] } }}>
                {employee.flagged ? "Unflag" :  <FlagIcon />}
              </Button>
              <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleDelete(employee.id); }}  sx={{ color: red[600], "&:hover": { color: red[800] } }}>
              <DeleteIcon />
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

    
      <Dialog open={!!selectedEmployee} onClose={handleClose}>
        <DialogTitle>{selectedEmployee?.name}</DialogTitle>
        <DialogContent>
          <p>Position: {selectedEmployee?.position}</p>
          <p>Department: {selectedEmployee?.department}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!!editEmployee} onClose={() => setEditEmployee(null)}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={editEmployee?.name || ""}
            onChange={handleEditChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            name="email"
            value={editEmployee?.email || ""}
            onChange={handleEditChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Position"
            name="position"
            value={editEmployee?.position || ""}
            onChange={handleEditChange}
            fullWidth
            margin="dense"
          />
          <TextField
            label="Department"
            name="department"
            value={editEmployee?.department || ""}
            onChange={handleEditChange}
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditEmployee(null)}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Employee;
