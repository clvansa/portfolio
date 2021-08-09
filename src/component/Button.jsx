import styled from "styled-components";

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  border: none;
  width: 120px;
  color: white;
  cursor: pointer;
  text-align: center;
  font-family: "Poppins", sans-serif;
  overflow: hidden;
  z-index: 1;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.3);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    z-index: -2;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #e60101;
    z-index: -1;
    transition: width 0.3s;
  }
  &:hover::before {
    width: 100%;
  }
`;

export default Button;
