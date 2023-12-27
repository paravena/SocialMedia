import {UserStory} from '../models/models.ts';

const defaultProfileImage = require('../../assets/images/default_profile.png');

const userStories: UserStory[] = [
  {id: 1, firstName: 'Josepth', profileImage: defaultProfileImage},
  {id: 2, firstName: 'Angel', profileImage: defaultProfileImage},
  {id: 3, firstName: 'White', profileImage: defaultProfileImage},
  {id: 4, firstName: 'Olivier', profileImage: defaultProfileImage},
  {id: 5, firstName: 'Nata', profileImage: defaultProfileImage},
  {id: 6, firstName: 'Nicolas', profileImage: defaultProfileImage},
  {id: 7, firstName: 'Nina', profileImage: defaultProfileImage},
  {id: 8, firstName: 'Nana', profileImage: defaultProfileImage},
  {id: 9, firstName: 'Adam', profileImage: defaultProfileImage},
];

export default userStories;
