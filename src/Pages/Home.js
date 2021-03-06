import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";
import logo from "../images/photo-cartoon.png";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "../App.css";
import Demo from "../Components/demo";
import Typewriter from "typewriter-effect";

// import { withStyles } from 'material-ui/styles';
// import Typography from 'material-ui/Typography';
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import fadeInRight from "react-animations/lib/fade-in-right";
import { blue } from "@material-ui/core/colors";
// import { Avatar } from '@material-ui/core';

const textContainer = {
  width: 50,
  background: blue,
};

const styles = {
  bounce: {
    animation: "x 4s",
    animationName: Radium.keyframes(bounce, "bounce"),
  },

  fadeInRight: {
    animation: "x 6s",
    animationName: Radium.keyframes(fadeInRight, "fadeInRight"),
  },

  main: {
    color: "black",
  },
  caption: {
    marginTop: 100,
    width: "90%",
  },
  section: {
    marginTop: 100,
  },
  hr: {
    marginTop: 100,
    width: "70%",
  },
};

const data = (
  <StyleRoot>
    <div style={styles.fadeInRight} className="textContainer">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("<h1> Hello World!</h1>")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .typeString("<h1>My name is Deepesh</h1>")
            .pauseFor(2500)
            .deleteAll()
            .typeString("<h1> Working in IT for over 13 years now</h1> &nbsp")
            .typeString("yes, 13 - unlucky for some")

            
            .start();
        }}
      />
     {/* <div style={styles.bounce} className="text">
        I am Deepesh
      </div>
      */}
    </div>
  </StyleRoot>
);
class Home extends React.Component {
  scrollTo() {
    scroll.scrollTo(100);
  }

  render() {
    var { classes } = this.props;
    return (
      <div>
       {/*} <Demo about={data} />

        {/* <div>home page</div> */}
        {/* <div className={classes.section}>
       <Typography className={classes.main} variant="display4" align="center">
Prayaag Venkat
      </Typography>
         <Typography className={classes.main} variant="display1" align="center" style={{marginTop: 50}}>
 Harvard University Theory of Computation Group Graduate Student
      </Typography>
     
</div> */}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
