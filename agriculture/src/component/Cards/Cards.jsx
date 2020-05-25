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
import { csv } from "d3";
import csvFile from "../../cropData.csv";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function Cards({data,city}) {
  const classes = useStyles();

  const [openDialog, setOpenDialog] = useState(false);
  const [csvData, setCsvData] = useState();


  // const dataList = String(Object.values(data));
  // console.log("data",data,dataList)
  const cropList = data.substring(0, data.length - 1).split(",");
  // console.log(cropList);

  useEffect(() => {
    // fetchLocationData();
    csv(csvFile).then((data) => {
      setCsvData(data);
    });
  }, []);

  const handleOpenDialog = (crop) => {
    setOpenDialog(true);
    console.log("crop",crop,city)
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
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      {openDialog && 
      <Modal
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        csvData={csvData}
      />
}
    </div>
  );
}
