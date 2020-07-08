import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    goal: 12,
    status: ""
  };


  shuffleScoreCard = id => {
    let clickedCharacters = this.state.clickedCharacters;

    if(clickedCharacters.includes(id)){
      this.setState({ clickedCharacters: [], score: 0, status:  "Game Over! Click to play again!" });
      return;
    }else{
      clickedCharacters.push(id)

      if(clickedCharacters.length === 12){
        this.setState({score: 12, status: "You Won! Click to play again!", clickedCharacters: []});
        console.log('You Win');
        return;
      }

      this.setState({ characters, clickedCharacters, score: clickedCharacters.length, status: " " });

      for (let i = characters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
      }
    }
  }

 
  render() {
    return (
      <div className="App">
     
        <Header total={this.state.score}
               goal={12}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.characters.map(character => (
            <Card
              shuffleScoreCard={this.shuffleScoreCard}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </Wrapper>
        </div>
    
    );
  }
}

export default App;