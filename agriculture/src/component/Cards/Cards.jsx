import React from "react";
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});
export default function Cards(data) {
  const classes = useStyles();
  const dataList = String(Object.values(data));
  const cropList = dataList.substring(0, dataList.length - 1).split(",");
  console.log(cropList);

  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {cropList &&
              cropList.map((crop) => (
                <Grid item xs={12} md={6}>
                  <Card className={cx(styles.card)}>
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
                      <Button size="small" color="primary">
                        Share
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
