import React, { useEffect } from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import styled from "styled-components";
import "aos/dist/aos.css";
import Translate from "react-translate-component";

export default function OutlinedTimeline() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <TimeLineTitle>
            <Translate content="qualification.t1" />
          </TimeLineTitle>
          <TimeLineDate>
            <Translate content="qualification.d1" />
          </TimeLineDate>
          <TimeLineDesc>
            <Translate content="qualification.p1" />
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right">
          <TimeLineTitle>
            <Translate content="qualification.t2" />
          </TimeLineTitle>
          <TimeLineDate>
            <Translate content="qualification.d2" />
          </TimeLineDate>
          <TimeLineDesc>
            <Translate content="qualification.p2" />
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left">
          <TimeLineTitle>
            <Translate content="qualification.t3" />
          </TimeLineTitle>
          <TimeLineDate>
            <Translate content="qualification.d3" />
          </TimeLineDate>
          <TimeLineDesc>
            <Translate content="qualification.p3" />{" "}
          </TimeLineDesc>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right">
          <TimeLineTitle>
            <Translate content="qualification.t4" />
          </TimeLineTitle>
          <TimeLineDate>
            <Translate content="qualification.d4" />
          </TimeLineDate>
          <TimeLineDesc>
            <Translate content="qualification.p4" />
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
