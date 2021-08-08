import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect, useState } from "react";

const SkillProgress = ({ type }) => {
  const [array, setArray] = useState([]);
  console.log(type);

  useEffect(() => {
    setArray(skills.find((skill) => skill[type]));
  }, [type]);
  const skills = [
    {
      frontend: [
        {
          title: "Html",
          value: 90,
        },
        {
          title: "Css",
          value: 80,
        },
        {
          title: "Javascript",
          value: 70,
        },
      ],
    },
    {
      backend: [
        {
          title: "Node js",
          value: 80,
        },
        {
          title: "Firebase",
          value: 60,
        },
        {
          title: "Mongodb",
          value: 85,
        },
      ],
    },
  ];
  Object.values(array).map((a) => console.log(a[0].title));

  return (
    <ProgressLists>
      {Object.values(array).map((element) =>
        element.map((skill, index) => (
          <ProgressItem key={index}>
            <ProgressListsTop>
              <ProgressListTitle>{skill.title} </ProgressListTitle>
              <ProgressListPercent>{skill.value}%</ProgressListPercent>
            </ProgressListsTop>
            <LinearProgress variant="determinate" color="secondary" value={skill.value} />
          </ProgressItem>
        ))
      )}
    </ProgressLists>
  );
};

export default SkillProgress;

const ProgressLists = styled.div`
  padding-left: 45px;
`;
const ProgressItem = styled.div`
  padding: 10px 0;
`;
const ProgressListsTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const ProgressListTitle = styled.h4``;
const ProgressListPercent = styled.span``;
