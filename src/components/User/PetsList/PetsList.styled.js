import styled from 'styled-components';
import { breakpoints } from 'helpers/breakpoints';

export const UserPetCard = styled.li`
  min-width: 280px;
  max-width: 440px;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  padding: 16px 20px 40px;

  @media ${breakpoints.minTablet} {
    width: 704px;
    max-width: none;
    max-height: 230px;

    padding: 20px;
    border-radius: 40px;
    overflow: hidden;
  }
  @media ${breakpoints.desktop} {
    width: 821px;
    max-height: 307px;
  }
`;

export const UserPetCardWrapper = styled.div`
  @media ${breakpoints.minTablet} {
    display: flex;
    gap: 32px;
  }
  @media ${breakpoints.desktop} {
  }
`;

export const UserPetAvatarThumb = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  @media ${breakpoints.minTablet} {
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
  @media ${breakpoints.desktop} {
  }
`;

export const UserPetAvatarImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const UserPetDescription = styled.div`
  position: relative;
  @media ${breakpoints.minTablet} {
    width: 471px;
  }
  @media ${breakpoints.desktop} {
    width: 588px;
  }
`;

export const UserPetText = styled.p`
  margin-bottom: 12px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.04em;
  hyphens: auto;
  color: #000000;
  max-width: 400px;
  &:last-child {
    margin-bottom: 0;
  }

  @media ${breakpoints.minTablet} {
    font-size: 16px;
    line-height: 22px;
    max-width: 471px;
  }
  @media ${breakpoints.desktop} {
    max-width: 580px;
    &:last-child {
      margin-top: 16px;
    }
  }
`;

export const UserPetCategoryName = styled.span`
  font-weight: 500;
  hyphens: auto;
`;

export const UserPetDeleteBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  fill: #111111;
  fill-opacity: 0.6;

  border: none;
  background: transparent;

  cursor: pointer;
  transition: fill linear 200ms, fill-opacity linear 200ms;
  &:hover,
  &:focus {
    fill: #f59256;
    fill-opacity: 1;
    outline: none;
  }

  @media ${breakpoints.minTablet} {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #fdf7f2;
    backdrop-filter: blur(2px);
  }
  @media ${breakpoints.desktop} {
  }
`;
