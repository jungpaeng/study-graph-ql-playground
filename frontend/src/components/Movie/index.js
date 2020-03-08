import * as React from 'react';
import {gql} from 'apollo-boost';
import {Link} from 'react-router-dom';
import MovieContainer from "./MovieContainer";
import MoviePoster from "./MoviePoster";
import {useMutation} from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int) {
    likeMovie(id: $id) @client
  }
`;

const UNLIKE_MOVIE = gql`
  mutation likeMovie($id: Int) {
    unlikeMovie(id: $id) @client
  }
`;

const Movie = ({id, medium_cover_image, isLiked}) => {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: {id: parseInt(id)},
  });
  const [unlikeMovie] = useMutation(UNLIKE_MOVIE, {
    variables: {id: parseInt(id)},
  });

  return (
    <MovieContainer>
      <Link to={`/${id}`}>
        <MoviePoster bg={medium_cover_image} />
      </Link>
      <button onClick={isLiked ? unlikeMovie : likeMovie}>
        {isLiked ? 'Unlike' : 'Like'}
      </button>
    </MovieContainer>
  );
};

export default Movie;
