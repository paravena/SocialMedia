import React from 'react';
import styled from 'styled-components/native';
import {PropsWithChildren} from 'react';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../lib/scaling.ts';

type Props = PropsWithChildren<{}>;

const Badge = ({children}: Props) => (
  <Container>
    <BadgeText>{children}</BadgeText>
  </Container>
);

const Container = styled.View`
  background-color: #f35bac;
  border-radius: ${horizontalScale(10)}px;
  align-items: center;
  justify-content: center;
  width: ${horizontalScale(10)}px;
  height: ${horizontalScale(10)}px;
  position: absolute;
  right: ${horizontalScale(10)}px;
  top: ${verticalScale(10)}px;
`;

const BadgeText = styled.Text`
  color: white;
  font-family: Inter;
  font-weight: 600;
  font-size: ${scaleFontSize(6)}px;
`;

export default Badge;
