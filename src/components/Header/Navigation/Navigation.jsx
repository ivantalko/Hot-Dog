import React from 'react';
import Nav from 'components/Header/Nav/Nav';
import UserNav from 'components/Header/UserNav/UserNav';
import AuthNav from 'components/Header/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/Auth/auth-selectors';
import { NavigationStyled, NavStyled } from './Navigation.styled';

export default function Navigation({ setBurgerMenu, burgerMenu }) {
  const token = useSelector(getToken);
  return (
    <NavigationStyled>
      <NavStyled>
        <Nav setBurgerMenu={setBurgerMenu} burgerMenu={burgerMenu} />
      </NavStyled>
      {token ? (
        <UserNav burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      ) : (
        <AuthNav burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      )}
    </NavigationStyled>
  );
}
