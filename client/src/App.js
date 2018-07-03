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

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

    //randomize image cards
    shuffleArray = arr => {
      const newFriends = arr.sort(() => Math.random() - 0.5)
      this.setState({friends : newFriends})
    }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Nav/> 
       
         <Title/>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
           
            image={friend.image}
           
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
