import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/css/custom.css";
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

import FormControl from "@mui/material/FormControl";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ManageQuestion = () => {
  //
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

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
          <div className="cel-card-header">Manage Question</div>
          <div className="cel-card-body">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-6"></div>
              <div className="col-sm-12 col-md-6 col-lg-6"></div>
              {/* Next */}
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="mx-auto cel-pt-20">
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined">Cancel</Button>
                    <Button variant="contained">Submit</Button>
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

export default ManageQuestion;
