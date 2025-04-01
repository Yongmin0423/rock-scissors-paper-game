import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 100%;
  img {
    width: 40%;
    aspect-ratio: 1/1;
  }
`;

function Box({ title, userSelect }) {
  console.log("User", userSelect);
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <img src={userSelect?.img || ""} />
        <p>result</p>
      </Container>
    </>
  );
}

export default Box;
