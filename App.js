
import './App.css';
import Box from './component/Box';
import { useState } from 'react';
import React, {Component} from 'react';

//가위바위보 게임 만들기 순서
//1.박스 2개(타이틀, 사진, 결과)
//2.가위바위보 버튼이 있다
//3.버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템이 선택된다
//5.3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6.이기면초록색 지면 빨강색 비기면 검정색으로 승패결과에 따라 테두리 색이 바뀐다
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
 
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const[computerSelect,setComputerSelect] = useState(null);
  const [result,setResult]=useState("");
  const play = (userChoice) => {
    setUserSelect( choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user,computer) => {
    console.log("user",user,"computer",computer);

    //user == computer -> 비김 tie
    //user == rock , computer == scissors -> user 이김 win
    //user == rock, computer == paper -> user 짐 lose
    //user == scissors, computer == paper -> user 이김 win
    //user == scissors, computer == rock -> user 짐 lose
    //user == paper, computer == rock -> user 이김 win
    //user == paper, computer == scissors -> user 짐 lose

    if(user.name === computer.name){
      return "tie";
    }else if(user.name ==="Rock")
      return computer.name === "Scissors"?"win":"lose";
    else if(user.name === "Scissors")
      return computer.name === "Paper"?"win":"lose";
    else if(user.name === "Paper")
      return computer === "Rock"?"win":"lose";
  };

  const randomChoice=()=>{
    let itemArray = Object.keys(choice);//객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array",itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    console.log("final",final);
    return choice[final];
  };

  return (
    <div className='container'>
      <div className='color'>
        <h1 className='game-title'>가위바위보 GAME</h1>
      </div>
      <div className='main padding-top margin-top'>
      
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")} className='button scissors'></button>
        <button onClick={() => play("rock")} className='button rock'></button>
        <button onClick={() => play("paper")} className='button paper'></button>
      </div>
      <div className='color position'></div>
    </div>
  );
}

export default App;
