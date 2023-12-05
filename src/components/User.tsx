import React, { useState } from "react";
import { Grid, Typography, Button, TextField, Paper } from "@mui/material";

const dataArray = [
  { name: "Ahsan Iftikhar", CNIC: "35202-976-67893" },
  { name: "Wardah Maqbool", CNIC: "35202-976-83608" },
  { name: "Ali Qureshi", CNIC: "35202-976-62905" },
  { name: "Muhammad Hassan", CNIC: "35202-963-12763" },
  { name: "Wajeed Abdullah", CNIC: "35202-746-73002" },
  { name: "Malaika Chaudhary", CNIC: "35202-346-00936" },
  { name: "Manal Rizwan", CNIC: "35202-375-11886" },
];

function User() {
  const [grid, setGrid] = useState(false);
  const handleView = () => {
    console.log(grid);
    if (grid) {
      setGrid(false);
    } else {
      setGrid(true);
    }
  };
  return (
    <div style={{ padding: "20px", border: "4px solid #000", margin: "5px" }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h4">User List</Typography>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            sx={{ textAlign: "right" }}
            onClick={() => handleView()}
          >
            Toggle View
          </Button>
        </Grid>
        <Grid container sx={{ textAlign: "center" }}>
          <Grid
            item
            xs={11}
            sx={{
              marginTop: "20px",
              marginBottom: "20px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Search"
              variant="outlined"
              sx={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              textAlign: "left",
              margineft: "0px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <Button
              sx={{
                background: "blue",
                width: "100%",
                height: "57px",
                marginTop: "19px",
              }}
            >
              🔍
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {grid ? (
        <Grid container spacing={4}>
          {dataArray.map((data, index) => (
            <Grid item xs={4}>
              <Paper key={index} elevation={3} sx={{ padding: "5px" }}>
                <Typography> {data.name} </Typography>
                <Typography>{data.CNIC}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div>
          <table style={{ marginInline: "auto" }}>
            <thead>
              <tr style={{ backgroundColor: "#00C6D2", color: "#08147F" }}>
                <th>Name</th>
                <th>CNIC</th>
              </tr>
            </thead>
            <tbody>
              {dataArray.map((data, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#D9D9D9",
                  }}
                >
                  <td>{data.name}</td>
                  <td>{data.CNIC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default User;
