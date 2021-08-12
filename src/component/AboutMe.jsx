import styled, { keyframes } from "styled-components";
import Translate, { onLocaleChange } from "react-translate-component";
import { useEffect, useState } from "react";
import Button from "./Button";

const AboutMe = ({ setOpen }) => {
  const [localChange, setLocalChange] = useState("en");
  const [array, setArray] = useState({
    i: [],
    am: [],
    web: [],
    developer: [],
  });

  useEffect(() => {
    setLocalChange(localStorage.getItem("lang"));
    onLocaleChange((lang) => {
      setLocalChange(lang);
    });
  }, []);

  useEffect(() => {
    if (localChange == "en") {
      setArray({
        i: ["I", "_"],
        am: ["A", "M"],
        web: ["W", "e", "b"],
        developer: ["D", "e", "v", "e", "l", "o", "p", "e", "r"],
      });
    } else {
      setArray({
        i: ["I", "c", "h", "_"],
        am: ["b", "i", "n"],
        web: ["W", "e", "b"],
        developer: ["E", "n", "t", "w", "i", "c", "k", "l", "e", "r"],
      });
    }
  }, [localChange]);

  const randomRotate = () => {
    return Math.random() * 30;
  };

  return (
    <Container>
      <Title>
        {array.i.map((letter, i) => (
          <Letter
            random={randomRotate()}
            key={`i${i}`}
            style={{ paddingRight: letter == "_" ? "10px" : 0 }}
          >
            {letter !== "_" && letter}{" "}
          </Letter>
        ))}
        {array.am.map((letter, i) => (
          <Letter random={randomRotate()} key={`am${i}`}>
            {letter}
          </Letter>
        ))}
      </Title>
      <Title>
        {array.web.map((letter, i) => (
          <Letter random={randomRotate()} key={`web${i}`}>
            {letter}
          </Letter>
        ))}{" "}
        {array.developer.map((letter, i) => (
          <Letter random={randomRotate()} key={`developer${i}`}>
            {letter}
          </Letter>
        ))}
      </Title>
      <SubTitle>
        <Translate content="about.subtitle" />
      </SubTitle>
      <TextAboutMe>
        <Translate content="about.aboutMe" />
      </TextAboutMe>
      <Button onClick={() => setOpen(true)}>Read More</Button>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  /* text-align: left; */

  min-height: 60vh;
  display: flex;
  padding: 40px;
  padding-left: 80px;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 500px;

  @media (max-width: 1040px) {
    width: 425px;
  }

  @media (max-width: 650px) {
    padding: 20px 10px;
    /* padding-left: 20px; */
    width: 350px;
  }

  @media (max-width: 450px) {
    padding: 20px 0;
    width: fit-content;
  }
`;
const Title = styled.h1`
  font-size: 3.2rem;
  width: 500px;
  text-align: center;
  font-weight: 900;

  @media (max-width: 650px) {
    font-size: 2rem;
    width: 100%;
  }

  @media (max-width: 450px) {
    font-size: 2rem;
  }
`;
const SubTitle = styled.h5`
  font-size: 1.2rem;
  text-align: left;
  font-family: "WindSong", cursive;
  letter-spacing: 2px;
  width: 400px;

  text-align: center;

  @media (max-width: 650px) {
    font-size: 0.5rem;
    width: 200px;
  }
`;

const Animation = (random) => keyframes`
  
  0% {
    transform: rotate(-${random}deg) scale(1.0) ;
  }
  25% {
    transform: rotate(-${random}deg) scale(1.5) ;
  }

  50% {
    transform: rotate(${random}deg) scale(1.5);
  }
  75% {
    transform: rotate(-${random}deg) scale(1.5);
  }
  100% {
    transform: rotate(${random}deg) scale(1.5);
  }
  
`;
const TextAboutMe = styled.p`
  margin-top: 20px;
  /* max-width: 350px; */
  width: 400px;
  padding-left: 5px;
  text-align: left;
  color: white;

  @media (max-width: 650px) {
    padding-left: 20px;
    width: 300px;
  }

  @media (max-width: 450px) {
    padding: 0 20px;
    width: fit-content;
  }
`;

const Letter = styled.span`
  color: inherit;
  display: inline-block;
  cursor: default;

  &:hover {
    /* animation: letter 1s alternate linear; */
    /* animation-iteration-count: infinite; */
    animation: ${(props) => Animation(props.random)} 1s infinite ease-in-out;
    color: red;
  }
`;
