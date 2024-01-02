import React from 'react';
import styled from 'styled-components/native';
import { horizontalScale, scaleFontSize } from '../../lib/scaling.ts';

type Props = {
  title: string;
  isFocused: boolean;
};
const ProfileTabTitle = ({ title, isFocused }: Props) => {
  return <Title isFocused={isFocused}>{title}</Title>;
};

const Title = styled.Text<Pick<Props, 'isFocused'>>`
  color: ${({ isFocused }) => (isFocused ? '#022150' : '#79869f')};
  font-family: Inter;
  font-weight: ${({ isFocused }) => (isFocused ? 500 : 400)};
  font-size: ${scaleFontSize(16)}px;
  padding: ${horizontalScale(15)}px;
`;

export default ProfileTabTitle;
