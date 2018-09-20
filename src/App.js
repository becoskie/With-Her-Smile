import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/NavBar";
import MaryCard from "./components/MaryCard";
import mary from "./mary.json"
import "./App.css";

class App extends Component {
  state = {
    mary,
    clickedMary: [],
    score: 0
  };
  
  render() {
    return (
      <div>
        <Navbar />
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
