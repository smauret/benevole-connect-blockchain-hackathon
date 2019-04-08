import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid/Grid";
import banner from '../static/banner.png'


const styles = theme => ({
  card: {
    margin: 8,
    width: '100%',
    height:'auto',
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class CardAd extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container xs={12} justify={"left"}>
        <Card className={classes.card}>
          <CardHeader
            title="- 10 % sur les sneakers Adidas ce mois-ci !"
          />
          <CardMedia
            className={classes.media}
            image={banner}
          />
        </Card>
      </Grid>
    );
  }
}

CardAd.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardAd);
