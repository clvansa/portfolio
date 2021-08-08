import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export default function OutlinedTimeline() {
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLineTitle>
            DCI Digital Career Institute gGmbH in Berlin
          </TimeLineTitle>
          <TimeLineDate>NOV 2019 – DEZ 2020</TimeLineDate>
          <TimeLineDesc>
            Weiterbildung zum Full-Stack Web Entwickler - einjährige
            Vollzeitausbildung - einschließlich Technologien des MERN-Stack -
            mehrere kleine und ein abschließendes großes praktisches Projekt
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLineTitle>
            DCI Digital Career Institute gGmbH in Berlin
          </TimeLineTitle>
          <TimeLineDate>SEPT 2019 – OKT 2019</TimeLineDate>
          <TimeLineDesc>
            Qualifizierung „Erprobungscenter Digitale Berufe“ für die Ausbildung
            zum Web Developer
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLineTitle> Udacity (Online-Kurs)</TimeLineTitle>
          <TimeLineDate>MAI 2018 – AUG 2018</TimeLineDate>
          <TimeLineDesc>
            Weiterbildung zum Programmierer - Full Stack Developer Track
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>
          <TimeLineTitle>
            Diplom in Wirtschaft und Handel in Damaskus, Syrien
          </TimeLineTitle>
          <TimeLineDate>SEPT 2005 – AUG 2008</TimeLineDate>
          <TimeLineDesc>
            {" "}
            - Technische Fachhochschule für Buchhaltung und Finanzierung -
            Schwerpunkt „Buchhaltung“ mit dem Prädikat „gut“
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

const TimeLineTitle = styled.h4`
  font-weight: 800;
`;
const TimeLineDate = styled.p`
  font-size: small;
  color: gray;
`;
const TimeLineDesc = styled.span`
  font-weight: 300;
`;
