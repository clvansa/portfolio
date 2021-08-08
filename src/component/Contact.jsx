import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Title>Get in Touch</Title>
      <Form>
        <Items>
          <Box>
            <Input placeholder="Name" />

            <Input placeholder="Email" />
          </Box>
          <Box>
            <Textarea placeholder="Message" />
          </Box>
        </Items>
        <Button>Send</Button>
      </Form>
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
    width: 300px;
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
`;
