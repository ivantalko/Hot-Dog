import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/Auth/auth-selectors';
import { getNoticesData } from 'redux/Notice/notice-operations';
import { selectorNoticesData } from 'redux/Notice/notice-selector';
import { useDispatch } from 'react-redux';
import { getNoticesById } from 'redux/Notice/notice-operations';
import { selectorNoticeById } from 'redux/Notice/notice-selector';

import {
  Section,
  NoticesList,
  NoticesItem,
  FavoriteBtn,
  HeartIconPrimal,
  PetCategory,
  NoticesItemImg,
  ItemTitle,
  ParametersList,
  ParametersItemText,
  ParametersName,
  ButtonsList,
  LearnMoreBtn,
  DeleteBtn,
  DeleteIcon,
} from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router-dom';
import { ModalNotice } from '../ModalNotice/ModalNotice.jsx';

export let category = '';

export const NoticiesCategoriesList = ({ searchQuery }) => {
  const dispatch = useDispatch();
  const noticeById = useSelector(selectorNoticeById);
  const isLogin = useSelector(getIsLogin);
  const location = useLocation();
  const pathname = location.pathname;
  const currentPath = pathname.slice(9);
  const [favotire, setFavorite] = useState(false);
  const [moreInfoVisible, setMoreInfoVisible] = useState(false);
  const [itemId, setItemId] = useState('');
  const notices = useSelector(selectorNoticesData);

  useEffect(() => {
    dispatch(getNoticesData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (location.pathname === '/notices/lost-found') {
    category = 'lostFound';
  } else if (location.pathname === '/notices/for-free') {
    category = 'inGoodHands';
  } else if (location.pathname === '/notices/sell') {
    category = 'sell';
  }

  const handleClickToFavorite = () => {
    setFavorite(!favotire);
  };

  const handleMoreInfoVisible = () => {
    dispatch(getNoticesById(itemId));
    setMoreInfoVisible(true);
    document.querySelector('body').classList.add('modal');
  };

  console.log(itemId);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyModalClose);
    return () => {
      window.removeEventListener('keydown', handleKeyModalClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyModalClose = e => {
    if (e.code === 'Escape') {
      setMoreInfoVisible(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      setMoreInfoVisible(false);
      document.querySelector('body').classList.remove('modal');
    }
  };

  const filteredPets = () => {
    const filteredForPet = notices.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery === '') {
      return notices;
    }
    return filteredForPet;
  };

  return (
    <Section>
      <NoticesList>
        {filteredPets().map(item => {
          return (
            <NoticesItem id={item.id} key={item._id}>
              <PetCategory>{item.category}</PetCategory>
              {isLogin && (
                <FavoriteBtn onClick={handleClickToFavorite}>
                  {favotire ? (
                    <HeartIconPrimal id="toFavoriteInList" active="true" />
                  ) : (
                    <HeartIconPrimal id="toFavoriteInList" active="false" />
                  )}
                </FavoriteBtn>
              )}
              <NoticesItemImg
                height="288px"
                loading="lazy"
                src={item.avatarURL}
                alt={item.Noki}
              />
              <ItemTitle>{item.title}</ItemTitle>

              <ParametersList>
                <li>
                  <ParametersItemText>
                    <ParametersName>Breed:</ParametersName>
                    {item.breed}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Place:</ParametersName>
                    {item.location}
                  </ParametersItemText>
                </li>
                <li>
                  <ParametersItemText>
                    <ParametersName>Age:</ParametersName>
                    {item.age}
                  </ParametersItemText>
                </li>
              </ParametersList>

              <ButtonsList>
                <li>
                  <LearnMoreBtn
                    id={item._id}
                    onClick={() => {
                      setItemId(item._id);
                      handleMoreInfoVisible();
                    }}
                  >
                    Learn more
                  </LearnMoreBtn>
                </li>
                {isLogin && (
                  <li>
                    <DeleteBtn
                      id={item._id}
                      onClick={() => {
                        console.log(`delete item id=${item._id}`);
                      }}
                    >
                      Delete <DeleteIcon />
                    </DeleteBtn>
                  </li>
                )}
              </ButtonsList>
            </NoticesItem>
          );
        })}
      </NoticesList>
      {moreInfoVisible && (
        <ModalNotice
          notices={notices}
          itemId={itemId}
          setMoreInfoVisible={setMoreInfoVisible}
          handleBackdropClose={handleBackdropClose}
          noticeById={noticeById}
        />
      )}
    </Section>
  );
};
