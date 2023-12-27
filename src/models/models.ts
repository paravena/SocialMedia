import {ImageSourcePropType} from 'react-native';

export type UserStory = {
  id: number;
  firstName: string;
  profileImage: ImageSourcePropType;
};

export type UserPost = {
  firstName: string;
  lastName: string;
  location: string;
  likes: number;
  comments: number;
  bookmarks: number;
  id: number;
  profileImage: ImageSourcePropType;
  image: ImageSourcePropType;
};
