import { useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import counterpart from "counterpart";

const Header = ({ homeRef, aboutRef, skillsRef, contactRef, projectRef }) => {
  const [active, setActive] = useState("home");

  const handleDirect = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActive(ref.current.id);
  };

  const handleChange = (e) => {
    counterpart.setLocale(e.target.value);
    localStorage.setItem("lang", e.target.value);
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
              <HeaderName>About</HeaderName>
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
              <HeaderName>Contact</HeaderName>
            </HeaderItem>
          </HeaderItems>
        </Left>
        <Right>
          <HeaderIcons>
            <HeaderIcon>
              <Select
                defaultValue={
                  localStorage.getItem("lang") || counterpart.getLocale()
                }
                onChange={(e) => handleChange(e)}
              >
                <Option value="en">EN</Option>
                <Option value="de">DE</Option>
              </Select>
            </HeaderIcon>
            <a href="https://github.com/clvansa" target="_blank">
              <HeaderIcon>
                <GitHubIcon />
              </HeaderIcon>
            </a>
            <a
              href="https://www.linkedin.com/in/majd-makkieh-6737a761/"
              target="_blank"
            >
              <HeaderIcon>
                <LinkedInIcon />
              </HeaderIcon>
            </a>
            <a href="mailto:clvansa@gmail.com">
              <HeaderIcon>
                <EmailIcon />
              </HeaderIcon>
            </a>
          </HeaderIcons>
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

  @media (max-width: 450px) {
    width: 100vw;
  }
`;
const HeaderWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div``;

const HeaderItems = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 650px) {
    width: 80vw;
  }
`;
const HeaderItem = styled.li`
  padding: 30px 10px;
  background-color: ${(props) => props.active && "red"};
  margin-left: 5px;
  transition: 0.5s background-color;

  @media (max-width: 650px) {
    padding: 10px;
    margin-left: 0;
  }

  &:hover {
    background-color: red;
  }
`;

const HeaderIcons = styled.div`
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const HeaderIcon = styled.div`
  padding: 30px 8px;
  cursor: pointer;
  transition: 0.5s color;

  @media (max-width: 650px) {
    padding: 5px;
  }

  @media (max-width: 550px) {
    /* display: none; */
  }

  &:hover {
    color: #8d8583;
  }
`;
const HeaderName = styled.span`
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 650px) {
    font-size: 10px;
  }
`;
const Right = styled.div``;

const ToTop = styled.div`
  position: fixed;
  bottom: 5px;
  right: 5px;
  /* border: 1px solid rgb(241, 8, 8, 0.5); */
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  z-index: 100;
  transition: all 0.5s;
  box-shadow:2px 1px 20px 0px rgba(0, 0, 0,5);

  &:hover {
    background-color: #2b2a30;
  }
`;

const Select = styled.select`
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
`;
const Option = styled.option`
  color: black;
`;
