import Background from 'components/Background';
import BaseButton from 'components/BaseButton';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import { loginUserOperation } from 'redux/Auth/auth-operations';
import { getToken } from 'redux/Auth/auth-selectors';

import {
  FormList,
  InputLoginForm,
  TitleLoginForm,
  LoginForma,
  TextLoginForm,
  LinkLoginForm,
  MobileContainer,
} from './LoginForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let logined = useSelector(getToken);

  const input = {
    email: setEmail,
    password: setPassword,
  };

  const onInput = evt => {
    input[evt.target.name](evt.target.value.trim());
  };

  const onSubmit = async evt => {
    evt.preventDefault();
    dispatch(loginUserOperation({ email, password }));
  };
  useEffect(() => {
    if (logined) {
      navigate(`/user`);
      setEmail('');
      setPassword('');
      return;
    }
  }, [logined, navigate]);

  return (
    <Background>
      <MobileContainer>
        <FormList>
          <TitleLoginForm>Login</TitleLoginForm>
          <div>
            <LoginForma onSubmit={onSubmit}>
              <InputLoginForm
                label="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}"
                required
                onChange={onInput}
                name="email"
                value={email}
                type="email"
                placeholder="Email"
              />
              <InputLoginForm
                label="Password"
                minLength={7}
                maxLength={32}
                required
                autoComplete="true"
                onChange={onInput}
                name="password"
                value={password}
                type="password"
                placeholder="Password"
                title="Please enter a password of at least 7 and no more than 32 characters"
              />
              <div>
                <BaseButton type="submit">Login</BaseButton>
                <TextLoginForm>
                  Don't have an account?{'  '}
                  <LinkLoginForm to="/register"> Register</LinkLoginForm>
                </TextLoginForm>
              </div>
            </LoginForma>
          </div>
        </FormList>
      </MobileContainer>
    </Background>
  );
};

export default LoginForm;
