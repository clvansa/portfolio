import styled from "styled-components";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useEffect, useState } from "react";
import { data } from "../utils/data";

const SkillProgress = ({ type }) => {

  const [playerData, setPlayerData] = useState(
    data.map((item) => ({ ...item, completed: 0 }))
  );


  useEffect(() => {
    const timer = setTimeout(() => progress(100), 100);

    return () => clearTimeout(timer);
  }, []);

  const progress = (completion) => {
    setPlayerData(
      data.map((item, index) => {
        const { completed: current } = playerData[index];
        console.log(current);
        const { completed: max } = item;

        return {
          ...item,
          completed: Math.min(current + completion, max),
        };
      })
    );
  };

  return (
    <ProgressLists>
      {playerData.map(
        (skill, index) =>
          skill.type == type && (
            <ProgressItem key={index}>
              <ProgressListsTop>
                <ProgressListTitle>{skill.title} </ProgressListTitle>
                <ProgressListPercent>{skill.completed}%</ProgressListPercent>
              </ProgressListsTop>
              <LinearProgress
                variant="determinate"
                color="secondary"
                value={skill.completed}
              />
            </ProgressItem>
          )
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
const ProgressListTitle = styled.h4`
  font-weight: 500;
`;
const ProgressListPercent = styled.span``;
