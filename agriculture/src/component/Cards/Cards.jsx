import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Card,
  Typography,
  Grid,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import cx from "classnames";
import Modal from "../ModalComponent/Modal";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Cards({ data, city }) {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const [graphData, setGraphData] = useState();
  const [formatedData, setFormatedData] = useState();

  const cropList = data.substring(0, data.length - 1).split(",");

  const fetchGraphData = async (crop) => {
    try {
      await axios({
        method: "get",
        url: `http://localhost:3000/${city}?crop=${crop}`,
      }).then((result) => {
        var res = [];
        result.data.map((x, index) => {
          res.push(["Year", "Yield"]);

          x.data.map((y, i) => {
            for (var j = 0; j < y.Year.length; j++)
              res.push([y.Year[j], y.value[j]]);
          });
        });
        setGraphData(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenDialog = (crop) => {
    fetchGraphData(crop);
    setOpenDialog(true);
    console.log("crop", crop, city);
  };

  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {cropList &&
              cropList.map((crop) => (
                <Grid item xs={12} md={6}>
                  <Card className={styles.card}>
                    <CardActionArea>
                      <CardContent>
                        <CardMedia
                          className={classes.media}
                          image={require("../../image/crops/" + crop + ".jpg")}
                          title={crop}
                        />
                        <Typography variant="h3">{crop}</Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => handleOpenDialog(crop)}
                      >
                        Graph
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      {openDialog && (
        <Modal
          open={openDialog}
          handleClose={() => {
            setOpenDialog(false);
            setGraphData([]);
          }}
          graphData={graphData}
        />
      )}
    </div>
  );
}
