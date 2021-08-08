import styled from "styled-components";
import { ExpandMore, ExpandLess, Code } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useState } from "react";
import SkillProgress from "./SkillProgress";

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
              <SkillsTitle>Frontend developer</SkillsTitle>
              <SkillsSubtitle>More than 2 years</SkillsSubtitle>
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
              <SkillsTitle>Backend developer</SkillsTitle>
              <SkillsSubtitle>More than 2 years</SkillsSubtitle>
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

  @media (min-width: 450px){
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
`;

const SkillsTitle = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
const SkillsSubtitle = styled.span`
  font-size: 14px;
`;

const CodeIcon = styled(Code)`
  font-size: 2.5rem !important;
  margin-right: 5px;
`;

const IconButtonCss = styled(IconButton)`
  color: white !important;
`;
