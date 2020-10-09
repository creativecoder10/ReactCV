import React from 'react';
// import { withStyles } from 'material-ui/styles';
import { withStyles } from '@material-ui/core/styles';

// import Typography from 'material-ui/Typography';
// import Grid from 'material-ui/Grid';
// import TextField from 'material-ui/TextField';
// import Paper from 'material-ui/Paper';
// import Button from 'material-ui/Button';
// import MailOutline from '@material-ui/icons/MailOutline'
// import StayPrimaryPortrait from '@material-ui/icons/StayPrimaryPortrait'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
    marginBottom: 40,
    margin: "0 auto",

  },
  button: {
    width: "80%",
  },
  section: {
    marginTop: 40
  },
  icon: {
    transform: "scale(2)",
    paddingTop: 10
  },
  main: {
    color: "black"
  },
  sendmsg: {
    marginTop: "120px"
  }
});

class Contact extends React.Component {
  constructor() {
    // this.state = {
    //   name: "",
    //   email: "",
    //   message: ""
    // }
  }
  // handleNameChange = (event) => {
  //   this.setState({ name: event.target.value });
  // }

  // handleEmailChange = (event) => {
  //   this.setState({ email: event.target.value });
  // }
  // handleMessageChange = (event) => {
  //   this.setState({ message: event.target.value });
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state)
  // }

  render() {
    // var { classes } = this.props;
    // return (<div> <div className={classes.section}>
    return (<div>
   <div>contact us</div>


    </div>);
  }
}

export default withStyles(styles)(Contact);