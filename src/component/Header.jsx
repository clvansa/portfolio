import { useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Header = ({ homeRef, aboutRef, skillsRef, contactRef, projectRef }) => {
  const [active, setActive] = useState("home");

  const handleDirect = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(ref.current.id);
  };
  return (
    <Container>
      <HeaderWraper>
        <Left>
          <HeaderItems>
            <HeaderItem
              active={active === "home"}
              onClick={() => handleDirect(homeRef)}
            >
              <HeaderName>Home</HeaderName>
            </HeaderItem>
            <HeaderItem
              active={active === "about"}
              onClick={() => handleDirect(aboutRef)}
            >
              <HeaderName>About me</HeaderName>
            </HeaderItem>
            <HeaderItem
              active={active === "skills"}
              onClick={() => handleDirect(skillsRef)}
            >
              <HeaderName>Skills</HeaderName>
            </HeaderItem>
            <HeaderItem
              active={active === "project"}
              onClick={() => handleDirect(projectRef)}
            >
              <HeaderName>Project</HeaderName>
            </HeaderItem>

            <HeaderItem
              active={active === "contact"}
              onClick={() => handleDirect(contactRef)}
            >
              <HeaderName>Contact me</HeaderName>
            </HeaderItem>
          </HeaderItems>
        </Left>
        <Right>
          <HeaderItems>
            <HeaderIcon>
              <GitHubIcon />
            </HeaderIcon>
            <HeaderIcon>
              <LinkedInIcon />
            </HeaderIcon>
            <HeaderIcon>
              <EmailIcon />
            </HeaderIcon>
          </HeaderItems>
        </Right>
      </HeaderWraper>
      <ToTop onClick={() => handleDirect(homeRef)}>
        <ArrowUpwardIcon
          style={{ padding: "0", margin: "0", fontSize: "30px" }}
        />
      </ToTop>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 70vw;
  margin: auto;
  color: white;
`;
const HeaderWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div``;
const HeaderItems = styled.ul`
  display: flex;
  list-style: none;
`;
const HeaderItem = styled.li`
  padding: 30px 10px;
  background-color: ${(props) => props.active && "red"};
  margin-left: 5px;
  transition: 0.5s background-color;

  @media (max-width: 650px) {
    padding: 10px;
  }

  &:hover {
    background-color: red;
  }
`;

const HeaderIcon = styled.div`
  padding: 30px 10px;
  cursor: pointer;
  transition: 0.5s color;

  @media (max-width: 650px) {
    padding: 10px;
  }
  
  &:hover {
    color: red;
  }
`;
const HeaderName = styled.span`
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  cursor: pointer;
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const Right = styled.div``;

const ToTop = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  border: 1px solid rgb(241, 8, 8, 0.5);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #2b2a30;
  }
`;
