import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40%;
  height: 100%;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  img {
    width: 40%;
    aspect-ratio: 1/1;
  }
`;

const Title = styled(motion.h1)`
  margin-bottom: 0.5rem;
`;

const Image = styled(motion.img)`
  margin: 1rem 0;
`;

const ResultText = styled(motion.p)`
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

function Box({ title, select, result }) {
  const getResultColor = () => {
    if (result === "win") return "green";
    if (result === "lose") return "red";
    return "black";
  };

  const resultStyle = {
    color: getResultColor(),
    fontWeight: result === "win" ? "bold" : "normal",
  };

  const containerVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      borderColor:
        result === "win" ? "green" : result === "lose" ? "red" : "black",
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
    },
  };

  const resultVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      scale: result === "win" ? [1, 2, 1] : 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container
      variants={containerVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.3 }}
    >
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </Title>

      {select && select.img && (
        <Image
          key={Date.now()}
          src={select.img}
          variants={imageVariants}
          initial="initial"
          animate="animate"
        />
      )}

      <ResultText style={resultStyle} variants={resultVariants}>
        {result}
      </ResultText>
    </Container>
  );
}

export default Box;
