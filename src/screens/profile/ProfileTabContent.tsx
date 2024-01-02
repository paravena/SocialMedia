import React from 'react';
import styled from 'styled-components/native';
import { horizontalScale, verticalScale } from '../../lib/scaling.ts';
const ProfileTabContent = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <Content>
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
        <ImageContent
          resizeMode="contain"
          source={require('../../../assets/images/default_post.png')}
        />
      </Content>
    </Container>
  );
};

const Container = styled.ScrollView`
  background-color: white;
`;

const Content = styled.View`
  padding: ${horizontalScale(21)}px;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ImageContent = styled.Image`
  width: ${horizontalScale(150)}px;
  height: ${verticalScale(90)}px;
  margin-top: ${verticalScale(11)}px;
`;

export default ProfileTabContent;
