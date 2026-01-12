import React from "react";
import { useTheme } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";
import { TextField, Button, Typography, Grid, Box, Container, Card, CardContent } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { AccountCircle, Email, Person, PersonAdd, SaveAlt } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    errorMessage: {
        color: theme.palette.error.main,
        fontSize: "0.75rem",
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1.5),
    },
}));

const NewProject = () => {
    const theme = useTheme();
    const classes = useStyles(); // Add this line to use the styles

    return (
        <button>Just a simple button to test page.</button>

    );
};

export default NewProject;