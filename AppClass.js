
import './App.css';
import Box from './component/BoxClass';
import { useState } from 'react';
import React, {Component} from 'react';



const choice = {
    rock:{
      name:"Rock",
      img:"https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"
    },
    scissors:{
      name:"Scissors",
      img:"https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
    },
    paper:{
      name:"Paper",
      img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
    }
  }
  export default class AppClass extends Component {
    constructor() {
      super();
      this.state = {
        userSelect: null,
        computerSelect: null,
        result: "",
      };
    }
  
    play = (userChoice) => {
      let computerChoice = this.randomChoice();
      this.setState({
        userSelect: choice[userChoice],
        computerSelect: computerChoice,
        result: this.judgement(choice[userChoice], computerChoice),
      });
    };
    randomChoice = () => {
      let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
      let randomItem = Math.floor(Math.random() * itemArray.length);
      let final = itemArray[randomItem];
      return choice[final];
    };
    judgement = (user, computer) => {
      if (user.name == computer.name) {
        return "tie";
      } else if (user.name == "Rock")
        return computer.name == "Scissors" ? "win" : "lose";
      else if (user.name == "Scissors")
        return computer.name == "Paper" ? "win" : "lose";
      else if (user.name == "Paper")
        return computer.name == "Rock" ? "win" : "lose";
    };
  render() {
    return (
          <div className='container'>
            <div className='color'>
              <h1 className='game-title'>가위바위보 GAME</h1>
            </div>
            <div className='main padding-top margin-top'>
            
              <Box title="You" item={this.state.userSelect} result={this.state.result}/>
              <Box title="Computer" item={this.state.computerSelect} result={this.state.result}/>
            </div>
            <div className='main'>
              <button onClick={() => this.play("scissors")} className='button scissors'></button>
              <button onClick={() => this.play("rock")} className='button rock'></button>
              <button onClick={() => this.play("paper")} className='button paper'></button>
            </div>
            <div className='color position'></div>
          </div>
        );
      }
      
  }
    