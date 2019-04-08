import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import yellow from '@material-ui/core/colors/yellow';
import TruffleContract from "truffle-contract";
import BenevoleConnect from "../build/contracts/BenevoleConnect";
import Web3 from "web3";


const styles = theme => ({
  card: {
    minWidth: 400,
    margin: 8
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
  },
  icon: {
    display: "flex",
    justifyContent: 'left',
    margin: theme.spacing.unit,
    flexDirection: 'row'
  },
  badge: {
    padding: '20px 15px 20px 15px',
    margin: '40px 40px 10px 60px',
    colorPrimary: yellow
  }
});


let LocationIcon = ({props}) => (
  <SvgIcon {...props}>
    <path
      d="M10,1.375c-3.17,0-5.75,2.548-5.75,5.682c0,6.685,5.259,11.276,5.483,11.469c0.152,0.132,0.382,0.132,0.534,0c0.224-0.193,5.481-4.784,5.483-11.469C15.75,3.923,13.171,1.375,10,1.375 M10,17.653c-1.064-1.024-4.929-5.127-4.929-10.596c0-2.68,2.212-4.861,4.929-4.861s4.929,2.181,4.929,4.861C14.927,12.518,11.063,16.627,10,17.653 M10,3.839c-1.815,0-3.286,1.47-3.286,3.286s1.47,3.286,3.286,3.286s3.286-1.47,3.286-3.286S11.815,3.839,10,3.839 M10,9.589c-1.359,0-2.464-1.105-2.464-2.464S8.641,4.661,10,4.661s2.464,1.105,2.464,2.464S11.359,9.589,10,9.589"></path>
  </SvgIcon>
);

let TimeIcon = ({props}) => (
  <SvgIcon {...props}>
    <path
      d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412"></path>
  </SvgIcon>
);

class CardPerson extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClickTitle = this.onClickTitle.bind(this);
    this.onClickDateIcon = this.onClickDateIcon.bind(this);
    this.registerBenevole = this.registerBenevole.bind(this);
    this.watchEvents = this.watchEvents.bind(this);
    this.onClickCardContent = this.onClickCardContent.bind(this);

    this.state = {
      reload:true
    };
    this.counter = 0;
    this.eventOK = true;
  }

  registerBenevole = async () => {
    console.log('Add Benevole')
    let payload = this.props.payload;
    if (payload.contract !== "") {
      payload.contract.setProvider(payload.web3.givenProvider);
      let deployedContract = await payload.contract.deployed();
      await deployedContract.addBenevole({from: payload.web3.givenProvider.selectedAddress});
    }
  };

  onClickTitle = () => {
    this.registerBenevole()
  };

  onClick = async () => {
    let payload = this.props.payload;
    payload.contract.setProvider(payload.web3.givenProvider);
    let deployedContract = await payload.contract.deployed();
    this.counter++;
    this.eventOK=false;
    this.setState({reload:false});
    await deployedContract.subscribeToEvent(0, 0, {from: payload.web3.givenProvider.selectedAddress})
      .on('confirmation', (confirmationNumber, receipt) => {
        console.log('YOLO') });
      deployedContract.getXPBenevole(0).then(xp => {
        console.log('xp',xp.words[0])
        this.props.updateXP(xp.words[0])
      })
  };

  onClickDateIcon = async () => {
    let payload = this.props.payload;
    payload.contract.setProvider(payload.web3.givenProvider);
    let deployedContract = await payload.contract.deployed();
    await deployedContract.createEvent('Event', 50, 800, {from: payload.web3.givenProvider.selectedAddress});
  };

  onClickCardContent = async () => {
    //this.watchEvents();
  };

  watchEvents = async () => {
    let payload = this.props.payload;

    payload.contract.setProvider(payload.web3.givenProvider);
    let deployedContract = await payload.contract.deployed();

    console.log('EVENT')

    deployedContract.benevoleSubscribed({}, {
      fromBlock: 'latest',
      toBlock: 'pending'
    }).watch((error, event) => {
      console.log("Xp updated !")
    })

  };


  render() {
    const {classes, title, sport, date, engagement, avatarURL, address, payload, updateXP, besoinReputation, disable} = this.props;

    return (
      <Badge classes={{badge: classes.badge}} badgeContent={'+' + engagement} color="primary" max={10000}>
        <Card className={classes.card}>
          <CardHeader
            title={title}
            subheader={sport}
            onClick={() => {
              this.onClickTitle()
            }}
          />
          <CardMedia
            className={classes.media}
            image={avatarURL}
            title="Avatar"
            onClick={() => {
              this.onClickDateIcon()
            }}
          />

          <CardContent onClick={() => this.onClickCardContent()}>
            <div className={classes.icon}>
              <LocationIcon color="secondary"/>
              <Typography component="p"> {address} </Typography>
            </div>
            <div className={classes.icon}>
              <TimeIcon color="secondary"/>
              <Typography component="p"> {date} </Typography>
            </div>
            <div className={classes.icon}>
              <Typography component="p"> Besoin XP: {besoinReputation} </Typography>
            </div>
            <Button variant="contained" color="primary" className={classes.button} disabled={disable && this.state.reload} onClick={() => {
              this.onClick()
            }}>
              Je m'engage
            </Button>
          </CardContent>
        </Card>
      </Badge>
    );
  }
}

CardPerson.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardPerson);
