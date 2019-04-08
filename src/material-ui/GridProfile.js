import React from 'react';
import {withStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ContainerAccount from '../containers/ContainerAccount'
import CardBadges from './CardBadges'
import CardAd from './CardAd'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    overflow: 'auto',
    padding: 16
  },
  column: {
    height: '100%',
  },
  badge: {
    height: '200px'
  }
});

class GridProfile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center" className={classes.root}>
        <Grid container justify="center">
          <Grid item className={classes.badge} xs={6}><ContainerAccount/></Grid>
          <Grid item xs={6}><CardBadges/></Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={12}><CardAd/></Grid>
        </Grid>

        <Grid container justify="center">
          <Grid item xs={6}></Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(GridProfile);
