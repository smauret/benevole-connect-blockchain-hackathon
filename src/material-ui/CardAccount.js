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
import profile_picture from '../static/profile_picture.jpg'
import ContainerAccount from "../containers/ContainerAccount";


const styles = theme => ({
  card: {
    margin: 8,
    width: '100%'
  },
  media: {
    height: '50px',
    paddingTop: '56.25%', // 16:9
    flexShrink: 1,
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

function Picture() {
  return <img height='150px' width='auto' src={profile_picture}/>;
}

//image={profile_picture}
class RecipeReviewCard extends React.Component {

  render() {
    const { classes , address } = this.props;

    return (
      <Grid container >
        <Card className={classes.card}>
          <Grid container justify="center">
            <Grid item className={classes.badge} xs={6}>
              <CardHeader
                title="Sarah Mauret"
                subheader={address}
              />
            </Grid>
            <Grid item className={classes.badge} xs={6}>
              <CardMedia
                className={classes.media}
                component={Picture}
                title="Avatar"
              />
            </Grid>
          </Grid>


          <CardContent>
            <Typography component="p">
              Je suis bénévole !
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
