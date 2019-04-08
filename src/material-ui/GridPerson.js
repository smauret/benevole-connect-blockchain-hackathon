import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CardPerson from './CardPerson'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    overflow: 'auto',
    padding: 16
  },
  column: {
    height: "100%",
  }
});

class GridPerson extends React.Component {
componentDidMount= () => {
  //console.log('payload', this.props.payload)
}

  render() {
    const { classes, list, images, payload, updateXP } = this.props;
    /*{images[person.id % 10].urls.regular}*/
    return (
      <Grid container justify="center" >
        <Grid container className={classes.root} >
          <Grid item xs={12} >
            <Grid container className="grid-container" justify="center" spacing={0}  >
              {list.map(person => (
                <Grid key={person.id} item >
                  <CardPerson key={person.id} id={person.id} title={person.title}
                              sport={person.sport} engagement={person.engagement}
                              date={person.date} avatarURL={person.avatarURL} address={person.address} payload={payload} updateXP={updateXP} besoinReputation={person.besoinReputation} disable={person.disabled}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GridPerson.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridPerson);
