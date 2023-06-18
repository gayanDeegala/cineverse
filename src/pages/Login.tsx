import { Button, Input } from 'antd';
import styled from 'styled-components';

export const Login = ({
  setLoggedIn,
}: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Form>
          <FormItem>
            <Label>Email</Label>
            <Input placeholder='Enter your email' />
          </FormItem>
          <FormItem>
            <Label>Password</Label>
            <Input.Password placeholder='Enter your password' />
          </FormItem>
          <Button
            type='primary'
            onClick={() => {
              setLoggedIn(true);
            }}
          >
            Sign In
          </Button>
        </Form>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.div`
  background-color: #333;
  color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;
