import React from 'react';
import styled from 'styled-components/native';
import {ImageSourcePropType} from 'react-native';
import {horizontalScale} from '../../lib/scaling';

type Props = {
  source: ImageSourcePropType;
  size: number;
};
const UserImageProfile = ({source, size}: Props) => (
  <ImageContainer>
    <StoryImage source={source} size={size} />
  </ImageContainer>
);

const ImageContainer = styled.View`
  border: solid 1px #f35ba0;
  border-radius: 65px;
  padding: ${horizontalScale(3)}px;
`;

const StoryImage = styled.Image<Pick<Props, 'size'>>`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
`;

export default UserImageProfile;
