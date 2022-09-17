import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../../assets/css/custom.css";
import { adminQuizActions } from '../../../redux/_actions/admin.quiz.actions';
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS
import { userActions } from "../../../redux/_actions/user.actions";
// import { CelsiorGrid } from 'celsior-grid';
// import 'celsior-grid/styles/celsior-grid.css';
// import 'celsior-grid/styles/celsior-theme-default.css';

// **************************
// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { RamenDining } from "@mui/icons-material";

const names = ["Java", ".Net", "ReactJs"];

const category = [
  { label: "Reasoining", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const AdminQuiz = () => {
  //
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [quizName, setQuizName] = React.useState('');
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (personName && quizName) {
      // get return url from location state or default to home page
      //const { from } = location.state || { from: { pathname: "/" } };
      dispatch(adminQuizActions.createQuiz({quizname:quizName,subjectid: 1,quizstatus:'inprogress',quiztime:30,istimerenabled:1,quizcode:22222}));
    }
  }
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //

  return (
    <>
      <div className="container">
        <div className="cel-card">
          <div className="cel-card-header">Create Quiz</div>
          <div className="cel-card-body">
            <form name="form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <FormControl className="frm-control">
                    <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      onInputChange={(event, newInputValue) => {
                        setQuizName(newInputValue);
                      }}
                      options={category}
                      renderInput={(params) => (
                        <TextField {...params} label="Name of Quiz" />
                      )}
                    />
                  </FormControl>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <FormControl className="frm-control">
                    <InputLabel id="demo-multiple-chip-label">
                      Choose Relevent Subjects
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={
                        <OutlinedInput
                          id="select-multiple-chip"
                          label="Choose Relevent Subjects"
                        />
                      }
                      renderValue={(selected) => (
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2.9 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                    // MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {/* Next */}
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="mx-auto cel-pt-20">
                    <Stack spacing={2} direction="row">
                      <Link to="/managequestion" className="nav-link">
                        <Button variant="outlined">Cancel</Button>
                      </Link>
                      <div>
                        <button variant="contained">Next</button>
                        </div>
                    </Stack>
                  </div>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default AdminQuiz;
