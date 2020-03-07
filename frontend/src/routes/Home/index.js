import * as React from 'react';
import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import HomeContainer from './HomeContainer';
import HomeHeader from './HomeHeader';
import HomeTitle from './HomeTitle';
import HomeSubtitle from './HomeSubtitle';
import HomeLoading from "./HomeLoading";

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

const Home = () => {
  const {loading, error, data} = useQuery(GET_MOVIES);

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeTitle>React Apollo Movie</HomeTitle>
        <HomeSubtitle>Test GraphQL</HomeSubtitle>
      </HomeHeader>
      {loading && <HomeLoading>Loading...</HomeLoading>}
    </HomeContainer>
  )
};

export default Home;
