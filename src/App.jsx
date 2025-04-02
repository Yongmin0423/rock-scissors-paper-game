// import { useState } from "react";
import styled from "styled-components";
import Box from "./components/Box";
import { useState } from "react";
import { motion } from "motion/react";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;

const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  height: 50vh;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 100px;
`;

const Btn = styled(motion.button)`
  font-size: 20px;
`;

const choice = {
  rock: {
    name: "Rock",
    img: "https://www.nicepng.com/png/full/6-61708_rock-rock-paper-scissors-clipart.png",
  },
  scissors: {
    name: "Scissors",
    img: "/img/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "/img/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const judgement = (user, computer) => {
    if (user.name == computer.name) {
      return "tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  const playGame = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    let result = judgement(choice[userChoice], choice[computerChoice]);
    setUserResult(result);
    result === "tie"
      ? setComputerResult("tie")
      : result === "win"
      ? setComputerResult("lose")
      : setComputerResult("win");
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice);
    return itemArray[Math.floor(Math.random() * itemArray.length)];
  };

  return (
    <Wrap>
      <BoxContainer>
        <Box title="You" select={userSelect} result={userResult} />
        <Box title="Computer" select={computerSelect} result={computerResult} />
      </BoxContainer>
      <BtnContainer>
        <Btn onClick={() => playGame("rock")}>Rock</Btn>
        <Btn onClick={() => playGame("scissors")}>Scissors</Btn>
        <Btn onClick={() => playGame("paper")}>Paper</Btn>
      </BtnContainer>
    </Wrap>
  );
}
export default App;
