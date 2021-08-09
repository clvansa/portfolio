import styled from "styled-components";
import { Code } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useState } from "react";
import SkillProgress from "./SkillProgress";
import Translate from "react-translate-component";

const Skills = () => {
  const [openFrontend, setOpenFrontend] = useState(false);
  const [openBackend, setOpenBackend] = useState(false);
  const [openDesigner, setOpenDesigner] = useState(false);
  const [type, setType] = useState("frontend");

  const handleToggle = (type) => {
    console.log(type);
    setType(type);
    if (type === "frontend") {
      setOpenFrontend(!openFrontend);
      setOpenBackend(false);
    } else if (type === "backend") {
      setOpenBackend(!openBackend);
      setOpenFrontend(false);
    }
  };
  return (
    <Container>
      <SkillsItems>
        <SkillsItem>
          <SkillsItemLeft>
            <CodeIcon />
            <SkillsBox>
              <SkillsTitle>
                <Translate content="skills.t1" />
              </SkillsTitle>
              <SkillsSubtitle>
                <Translate content="skills.s1" />
              </SkillsSubtitle>
            </SkillsBox>
          </SkillsItemLeft>
        </SkillsItem>
        <SkillProgress type={"frontend"} />
      </SkillsItems>

      <SkillsItems>
        <SkillsItem>
          <SkillsItemLeft>
            <CodeIcon />
            <SkillsBox>
              <SkillsTitle><Translate content="skills.t2" /></SkillsTitle>
              <SkillsSubtitle><Translate content="skills.s2" /></SkillsSubtitle>
            </SkillsBox>
          </SkillsItemLeft>
        </SkillsItem>
        <SkillProgress type={"backend"} />
      </SkillsItems>

      {/* <SkillsItems>
        <SkillsItem>
          <SkillsItemLeft>
            <CodeIcon />
            <SkillsBox>
              <SkillsTitle>Designer </SkillsTitle>
              <SkillsSubtitle>More than 2 years</SkillsSubtitle>
            </SkillsBox>
          </SkillsItemLeft>
          <IconButtonCss onClick={() => handleToggle("backend")}>
            {openDesigner ? <ExpandLess /> : <ExpandMore />}
          </IconButtonCss>
        </SkillsItem>
        {openDesigner && <SkillProgress type={type} />}
      </SkillsItems> */}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  /* background-color: #2b2a30; */
  /* width: 100%;
  height: 100%; */

  /* background-image: linear-gradient(180deg, #444446 20%, #2b2a30 100%); */
  padding: 40px;
  min-height: 35vh;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;

const SkillsItems = styled.div`
  width: fit-content;
  padding-right: 120px;
  /* padding: 0 30px; */

  @media (max-width: 768px) {
    padding: 0;
  }
`;
const SkillsItem = styled.div`
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */
`;
const SkillsBox = styled.div``;
const SkillsItemLeft = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 300px;

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const SkillsTitle = styled.h3`
  font-weight: 900;
  font-size: 1.2rem;
  @media (max-width: 465px) {
    font-size: 0.7rem;
  }
`;
const SkillsSubtitle = styled.span`
  font-size: 14px;
  @media (max-width: 465px) {
    font-size: 10px;
  }
`;

const CodeIcon = styled(Code)`
  font-size: 2.5rem !important;
  margin-right: 5px;

  @media (max-width: 465px) {
    font-size: 1.5rem !important;
  }
`;

const IconButtonCss = styled(IconButton)`
  color: white !important;
`;
