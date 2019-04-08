import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Grid from "@material-ui/core/Grid/Grid";
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import badge from '../static/badge.png'


const styles = theme => ({
  card: {
    margin: 8,
    width: '100%',
    height:'100%',
  },
  media: {
    paddingTop: "56.25%", // 16:9

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

class CardBadges extends React.Component {

  render() {
    const { classes , address } = this.props;

    return (
      <Grid container xs={12} justify={"left"}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={badge}
            title="Avatar"
          />
        </Card>
      </Grid>
    );
  }
}

CardBadges.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardBadges);
