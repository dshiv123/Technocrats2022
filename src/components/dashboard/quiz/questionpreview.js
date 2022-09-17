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

// **************************
// import * as React from "react";
import { useTheme } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
// import Radio from "@mui/material/Radio";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

//

const QuestionPreview = () => {
  //
  const [QuestionType, setQuestionType] = React.useState("");
  const [QuestionPoint, setQuestionPoint] = React.useState("");
  const [Timer, setTimer] = React.useState("");

  const handleChange = (event) => {
    setQuestionType(event.target.value);
  };
  const handleChangeQuesType = (event) => {
    setQuestionPoint(event.target.value);
  };
  const handleChangeTimer = (event) => {
    setTimer(event.target.value);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //

  return (
    <>
      <div className="container">
        <div className="cel-card">
          <div className="cel-card-header">
            Question Preview
            <div className="div-right">
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
              >
                Options
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  <AddIcon />
                  Add
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  <EditIcon />
                  Edit
                </MenuItem>

                <MenuItem onClick={handleClose} disableRipple>
                  <DeleteIcon />
                  Delete
                </MenuItem>
              </StyledMenu>
            </div>
          </div>
          <div className="cel-card-body">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="right-icon">
                  <ChevronLeftIcon />
                  <ChevronRightIcon />
                </div>
                <div
                  contentEditable="true"
                  className="content-editable content-editable-large"
                >
                  Edit your question here
                </div>
              </div>
              {/* <div className="col-sm-4 col-md-2 col-lg-2">
               
              </div> */}

              {/* Next */}

              {/*  */}

              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cel-pt-20">
                <div
                  contentEditable="true"
                  className="content-editable-large action-link pre-ans1"
                >
                  Type an answer option here
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cel-pt-20">
                <div
                  contentEditable="true"
                  className="content-editable-large action-link pre-ans2"
                >
                  Type an answer option here
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cel-pt-20">
                <div
                  contentEditable="true"
                  className="content-editable-large action-link pre-ans3"
                >
                  Type an answer option here
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 cel-pt-20">
                <div
                  contentEditable="true"
                  className="content-editable-large action-link pre-ans4"
                >
                  Type an answer option here
                </div>
              </div>
              {/*  */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="mx-auto cel-pt-20">
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Show Answer</Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default QuestionPreview;
