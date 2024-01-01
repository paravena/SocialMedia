import React from 'react';
import styled from 'styled-components/native';
import UserImageProfile from '../profile/UserImageProfile';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../lib/scaling.ts';
import { UserStory } from '../../models/models.ts';

type Props = {
  item: UserStory;
};
const StoryItem = ({ item }: Props) => {
  const { firstName, profileImage } = item;
  return (
    <Container>
      <UserImageProfile source={profileImage} size={horizontalScale(65)} />
      <Title>{firstName}</Title>
    </Container>
  );
};

const Container = styled.View`
  margin-right: 20px;
`;

const Title = styled.Text`
  font-family: Inter;
  font-weight: 500;
  font-size: ${scaleFontSize(14)}px;
  color: #022150;
  margin-top: ${verticalScale(8)}px;
  text-align: center;
`;

export default StoryItem;
