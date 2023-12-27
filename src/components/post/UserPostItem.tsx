import React from 'react';
import {UserPost} from '../../models/models.ts';
import styled from 'styled-components/native';
import UserImageProfile from '../profile/UserImageProfile.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../lib/scaling.ts';

type Props = {
  post: UserPost;
};
const UserPostItem = ({post}: Props) => {
  const {
    firstName,
    lastName,
    image,
    comments,
    likes,
    location,
    bookmarks,
    profileImage,
  } = post;
  return (
    <Container>
      <Header>
        <Inner>
          <UserImageProfile source={profileImage} size={horizontalScale(48)} />
          <FullNameContainer>
            <FullName>
              {firstName} {lastName}
            </FullName>
            {location && <Location>{location}</Location>}
          </FullNameContainer>
        </Inner>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869f"
          size={scaleFontSize(24)}
        />
      </Header>
      <Body>
        <ImageBody source={image} />
      </Body>
      <IconsContainer>
        <IconItem>
          <FontAwesomeIcon icon={faHeart} color="#79869f" />
          <IconCounter>{likes}</IconCounter>
        </IconItem>
        <IconItem>
          <FontAwesomeIcon icon={faMessage} color="#79869f" />
          <IconCounter>{comments}</IconCounter>
        </IconItem>
        <IconItem>
          <FontAwesomeIcon icon={faBookmark} color="#79869f" />
          <IconCounter>{bookmarks}</IconCounter>
        </IconItem>
      </IconsContainer>
    </Container>
  );
};

const Container = styled.View`
  margin: ${verticalScale(35)}px ${horizontalScale(24)}px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eff2f6;
  padding-bottom: ${verticalScale(20)}px;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Inner = styled.View`
  flex-direction: row;
`;

const FullNameContainer = styled.View`
  justify-content: center;
  margin-left: ${horizontalScale(10)}px;
`;
const FullName = styled.Text`
  color: #000;
  font-family: Inter;
  font-weight: 600;
  font-size: ${scaleFontSize(16)}px;
`;

const Location = styled.Text`
  color: #79869f;
  font-family: Inter;
  font-weight: 400;
  font-size: ${scaleFontSize(12)}px;
  margin-top: ${verticalScale(5)}px;
  text-align: left;
`;

const Body = styled.View`
  margin: ${verticalScale(20)}px 0;
  align-items: center;
`;

const ImageBody = styled.Image``;
const IconsContainer = styled.View`
  flex-direction: row;
  margin-left: ${horizontalScale(10)}px;
  gap: ${horizontalScale(27)}px;
`;
const IconItem = styled.View`
  flex-direction: row;
`;
const IconCounter = styled.Text`
  margin-left: ${horizontalScale(3)}px;
  color: #79869f;
`;
export default UserPostItem;
