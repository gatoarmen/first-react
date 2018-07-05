import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    
    friends,
    currentScore: 0,
    highScore: 0,
    clicked: [],
  };

  resetGame = () => {
    this.setState({
      friends,
      currentScore: 0,
      highScore: this.state.currentScore,
      clicked: [],
    })
    this.shuffleArray(friends)
  }
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

    //randomize image cards
    shuffleArray = arr => {
      const newFriends = arr.sort(() => Math.random() - 0.5)
      this.setState({friends : newFriends})
    }

     //add id to clicked array
  clicked = card => {
    this.shuffleArray(friends)
    if (this.state.clicked.includes(card.target.id)) {
      this.resetGame();
    } else {
      //increase score by 1
      this.increase();
      //add id to clicked array
      const newClicksArray = this.state.clicked.slice();
      newClicksArray.push(card.target.id)
      this.setState({ clicked: newClicksArray})
    }
  }

    //increase score
    increase = () => {
      const newScore = this.state.currentScore + 1;
      this.setState({currentScore : newScore})
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav/> 
       
         <Title
         currentScore = {this.state.currentScore}
         highScore = {this.state.highScore}
         />
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            key={friend.id}
            id={friend.id}
            clicked={this.clicked}
            image={friend.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
