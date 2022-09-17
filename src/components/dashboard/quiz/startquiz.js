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
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

// **************************
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

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

const StartQuiz = () => {
  //

  //

  return (
    <>
      <div className="container">
        <div className="cel-card">
          <div className="cel-card-header">Start Quiz</div>
          <div className="cel-card-body">
            <h2>Your Quiz name is... </h2>
            <div className="row">
              {/* <div className="col-sm-12 col-md-6 col-lg-6"></div>
              <div className="col-sm-12 col-md-6 col-lg-6"></div> */}
              <div class="row">
                <div class="col-md-6 offset-md-3">
                  <Box component="form" noValidate autoComplete="off">
                    <TextField
                      className="frm-control"
                      id="outlined-basic"
                      label="Enter your Quiz Name"
                      variant="outlined"
                    />
                  </Box>
                </div>
              </div>
              {/* Next */}
              <div className="col-md-6 offset-md-3">
                <div className="mx-auto cel-pt-20">
                  <Stack spacing={2} direction="row" fullWidth>
                    <Link to="/managequestion" fullWidth className="nav-link">
                      <Button variant="contained" fullWidth>
                        Start
                      </Button>
                    </Link>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default StartQuiz;
