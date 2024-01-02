import React from 'react';
import styled from 'styled-components/native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../lib/scaling.ts';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation.tsx';
const Profile = () => {
  return (
    <Container>
      <Inner contentContainerStyle={{ flexGrow: 1 }}>
        <ProfileImageContainer>
          <ProfileImageContent>
            <ProfileImage
              source={require('../../../assets/images/default_profile.png')}
            />
          </ProfileImageContent>
        </ProfileImageContainer>
        <FullName>Emmanuel Robertsen</FullName>
        <StatsContainer>
          <StatsItem>
            <StatValue>45</StatValue>
            <StatDesc>Following</StatDesc>
          </StatsItem>
          <StatBorder />
          <StatsItem>
            <StatValue>30M</StatValue>
            <StatDesc>Followers</StatDesc>
          </StatsItem>
          <StatBorder />
          <StatsItem>
            <StatValue>100</StatValue>
            <StatDesc>Posts</StatDesc>
          </StatsItem>
        </StatsContainer>
        <TabsContainer>
          <ProfileTabsNavigation />
        </TabsContainer>
      </Inner>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const Inner = styled.ScrollView``;
const ProfileImage = styled.Image`
  width: ${horizontalScale(110)}px;
  height: ${horizontalScale(110)}px;
`;

const ProfileImageContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${verticalScale(32)}px;
`;

const ProfileImageContent = styled.View`
  border: 1px solid #0150ec;
  border-radius: ${horizontalScale(110)}px;
  padding: ${horizontalScale(4)}px;
`;

const FullName = styled.Text`
  margin-top: ${verticalScale(20)}px;
  text-align: center;
  color: #022150;
  font-family: Inter;
  font-weight: 600;
  font-size: ${scaleFontSize(20)}px;
`;

const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 ${horizontalScale(40)}px;
  padding: ${verticalScale(30)}px 0;
  border-bottom-width: 1px;
  border-color: #e9eff1;
`;
const StatsItem = styled.View`
  justify-content: center;
  align-items: center;
`;
const StatValue = styled.Text`
  font-family: Inter;
  font-weight: 600;
  font-size: ${scaleFontSize(20)}px;
  color: #022150;
  text-align: center;
`;
const StatDesc = styled.Text`
  font-family: Inter;
  font-weight: 400;
  font-size: ${scaleFontSize(16)}px;
  color: #79869f;
  text-align: center;
`;

const StatBorder = styled.View`
  border-right-width: 1px;
  border-color: #e9eff1;
`;

const TabsContainer = styled.View`
  flex: 1;
`;

export default Profile;
