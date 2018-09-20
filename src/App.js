import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import MaryCard from "./components/MaryCard";
import mary from "./mary.json"
import "./App.css";


class App extends Component {
  state = {
    mary,
    maryClicked: [],
    score: 0,
    highScore: 0,
    message: "Click Image To Begin!"
  };

  imageClick = event => {
    const currentMary = event.target.alt;
    const MaryAlreadyClicked = this.state.maryClicked.indexOf(currentMary) > -1;

    if (MaryAlreadyClicked) {
      if(this.state.score > this.state.highScore) {
        this.setState( {highScore: this.state.score} )
      }
      this.setState({
        maryClicked: [],
        score: 0,
        message: "You made Mary Skunky."
      });

    } else {
      if(this.state.score >= this.state.highScore) {
        this.setState( {highScore: this.state.score + 1} )
      }

      this.setState(
        {
          mary: this.state.mary.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          maryClicked: this.state.maryClicked.concat(
            currentMary
          ),
          score: this.state.score + 1,
          message: "Good job! Mary's still Fresh",
        },
        () => {
          if (this.state.score === 12) {
            this.setState({
              mary: this.state.mary.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              maryClicked: [],
              score: 0,
              message: "You Kept Mary fresh for 12 days!"
            });
          }
        }
      );
    }

  }; // end image clicked
  


  render() {
    return (
      <div>
        <NavBar 
          message = {this.state.message}
          score = {this.state.score}
          highScore = {this.state.highScore}
        />
         <Wrapper>
         {this.state.mary.map(mary => (
            <MaryCard
              imageClick={this.imageClick}
              id={mary.id}
              key={mary.id}
              image={mary.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
