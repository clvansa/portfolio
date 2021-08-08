import { useState } from "react";
import styled from "styled-components";

const AboutMe = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Title>I AM </Title>
      <Title> Web Developer</Title>
      <SubTitle>Full-Stack Web Entwickler </SubTitle>
      <TextAboutMe>
        Full-Stack Web Entwickler mit mehr als 7Jahren Erfahrung in der
        Buchhaltung.
      </TextAboutMe>
      <Button onClick={() => setOpen(true)}>Read More</Button>

      {open && (
        <Popup>
          <TextAboutMe>
            Derzeit befinde ich mich in einer einjährigen Vollzeitausbildung im
            Bereich Full-Stack Webentwicklung (MERN Stack) und bin auf der Suche
            nach einer neuen Herausforderung im Bereich der Webentwicklung. Ein
            hohes Maß an Professionalität und Flexibilität sind mir wichtig. Ich
            habe die Fähigkeit, mir Programmiersysteme bzw. -sprachen
            autodidaktisch zu erschließen.
          </TextAboutMe>
          <Button
            onClick={() => setOpen(false)}
            style={{ textAlign: "center" }}
          >
            Close
          </Button>
        </Popup>
      )}
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

  @media (max-width: 650px) {
    padding-left: 20px;
    width: 400px;
  }

  @media (max-width: 450px) {
    padding: 20px 0;
    width: fit-content;
  }
`;
const Title = styled.h1`
  font-size: 3.2rem;
  width: 600px;
  text-align: center;
  font-weight: 900;

  @media (max-width: 650px) {
    font-size: 1.5rem;
    width: 200px;
  }

  @media (max-width: 450px) {
    font-size: 1.3rem;
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
const TextAboutMe = styled.p`
  margin-top: 20px;
  /* max-width: 350px; */
  width: 400px;
  padding-left: 5px;
  text-align: left;

  @media (max-width: 650px) {
    padding-left: 20px;
    width: 300px;
  }

  @media (max-width: 450px) {
    padding: 0 20px;
    width: fit-content;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: red;
  outline: none;
  border: none;
  width: 120px;
  color: white;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  /* width: 400px; */
  text-align: center;

  &:hover {
    outline: 1px solid red;
    background-color: transparent;
  }
`;

const Popup = styled.div`
  width: 500px;
  height: 500;
  position: absolute;
  background-color: #2b2a30;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.4);
`;
