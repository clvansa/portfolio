import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import styled from "styled-components";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      position="relative"
      display="inline-flex"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <LinearProgressCss variant="determinate" {...props} />
      <Box
        top={-50}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Title>Loading</Title>
      </Box>
      {/* <Title style={{ fontSize: "1.2rem", color: "white" }}>{`${Math.round(
        props.value
      )}%`}</Title> */}
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  color: #8d8583;
`;

const LinearProgressCss = styled(LinearProgress)`
  width: 300px;
  background-color: #2b2a30;
  .MuiLinearProgress-barColorPrimary {
    background-color: #8d8583;
  }
`;
