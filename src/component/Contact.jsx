import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";
import Translate from "react-translate-component";

const Contact = () => {
  const [state, handleSubmit] = useForm("mvodwnkj");
  const [succeeded, setSucceeded] = useState(false);
  const [buttonState, setButtonState] = useState("");
  const formRef = useRef();

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      if (state.succeeded) {
        formRef.current.reset();
        setSucceeded(true);
      }
    }

    return () => (mounted = false);
  }, [state.succeeded]);

  console.log(buttonState);
  return (
    <Container>
      <Title>
        <Translate content="contact.title" />
      </Title>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Items>
          <Box>
            <Input
              placeholder="Name"
              id="name"
              type="text"
              name="name"
              required
            />
            <Input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </Box>
          <Box>
            <Textarea
              placeholder="Message"
              id="message"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </Box>
        </Items>

        <Button type="submit" disabled={state.submitting}>
          Send
        </Button>
      </Form>
      <p>{succeeded && "Message has been successfully sent!"}</p>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 20px;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 650px) {
    width: 100%;
    height: 50vh;
  }
`;
const Title = styled.h3`
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;
const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 10px;
  background-color: #b1afb0;
  &:focus {
    outline: none;
  }
`;
const Textarea = styled.textarea`
  width: 200px;
  height: 90px;
  border: none;
  border-radius: 5px;
  padding-left: 5px;
  resize: none;
  background-color: #b1afb0;
  &:focus {
    outline: none;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Button = styled.button`
  margin: auto;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #b1afb0;
  color: #2b2a30;
  cursor: pointer;
  transition: 0.5s all;

  &:hover {
    color: white;
    background-color: #666566;
  }
`;
