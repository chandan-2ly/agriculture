import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Chart from "react-google-charts";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(data) {
  const classes = useStyles();
  console.log("props", data.graphData);

  const dummyData = [
    ["Year", "Yeild"],
    ["2014", 1000],
    ["2015", 1170],
    ["2016", 660],
    ["2017", 1030],
  ];
  console.log(data);

  const handleClose = () => {
    data.handleClose();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={data.open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={data.open}>
          <Chart
            width={"500px"}
            height={"300px"}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={data.graphData}
            options={{
              // Material design options
              chart: {
                title: "Crop historic data",
                subtitle: "",
              },
            }}
          />
        </Fade>
      </Modal>
    </div>
  );
}
