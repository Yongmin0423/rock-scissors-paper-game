// import { useState } from "react";
import styled from "styled-components";
import Box from "./components/Box";
import { useState } from "react";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
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
  margin-top: 20px;
`;

const choice = {
  rock: {
    name: "Rock",
    img: "https://www.nicepng.com/png/full/6-61708_rock-rock-paper-scissors-clipart.png",
  },
  scissors: {
    name: "Scissors",
    img: "public/img/scissors.png",
  },
  paper: {
    name: "Paper",
    img: "public/img/paper.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const playGame = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <Wrap>
      <BoxContainer>
        <Box title="You" userSelect={userSelect} />
        <Box title="Computer" />
      </BoxContainer>
      <BtnContainer>
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("scissors")}>Scissors</button>
        <button onClick={() => playGame("paper")}>Paper</button>
      </BtnContainer>
    </Wrap>
  );
}

export default App;
