/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import Badge from './src/components/badge/Badge.tsx';
import {UserPost, UserStory} from './src/models/models.ts';
import StoryItem from './src/components/story/StoryItem.tsx';
import userStories from './src/data/userStories.ts';
import userPosts from './src/data/userPosts.ts';
import UserPostItem from './src/components/post/UserPostItem.tsx';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from './src/lib/scaling.ts';

const USER_STORIES_PAGE_SIZE = 4;
const USER_POSTS_PAGE_SIZE = 2;

function pagination<T>(database: T[], currentPage: number, pageSize: number) {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  if (startIndex >= database.length) {
    return [];
  }
  return database.slice(startIndex, endIndex);
}

const App = () => {
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    UserStory[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState<
    UserPost[]
  >([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  useEffect(() => {
    setIsLoadingUserStories(true);
    setUserStoriesRenderedData(
      pagination(userStories, 1, USER_STORIES_PAGE_SIZE),
    );
    setIsLoadingUserStories(false);
    setIsLoadingUserPosts(true);
    setUserPostsRenderedData(pagination(userPosts, 1, USER_POSTS_PAGE_SIZE));
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <PostsContainer>
        <FlatList
          ListHeaderComponent={
            <>
              <Header>
                <Title>Let's Explore</Title>
                <IconTouchable>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#898dad"
                    size={scaleFontSize(20)}
                  />
                  <Badge>2</Badge>
                </IconTouchable>
              </Header>
              <StoriesContainer>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isLoadingUserStories) {
                      return;
                    }
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      USER_STORIES_PAGE_SIZE,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => <StoryItem item={item} />}
                  keyExtractor={item => `user-story-${item.id}`}
                />
              </StoriesContainer>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserPosts) {
              return;
            }
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              USER_POSTS_PAGE_SIZE,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <UserPostItem post={item} />}
          keyExtractor={item => `user-post-${item.id}`}
        />
      </PostsContainer>
    </SafeAreaView>
  );
};

export default App;

const Header = styled.View`
  margin: ${verticalScale(30)}px ${horizontalScale(27)}px 0
    ${horizontalScale(17)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconTouchable = styled.TouchableOpacity`
  padding: ${verticalScale(14)}px ${horizontalScale(14)}px;
  background-color: #f9fafb;
  border-radius: ${horizontalScale(100)}px;
`;

const StoriesContainer = styled.View`
  margin: ${verticalScale(20)}px ${horizontalScale(28)}px;
`;

const Title = styled.Text`
  font-family: 'Inter';
  color: #022150;
  font-size: ${scaleFontSize(24)}px;
  font-weight: 600;
`;

const PostsContainer = styled.View``;
