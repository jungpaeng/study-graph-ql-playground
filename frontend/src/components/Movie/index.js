import * as React from 'react';
import {Link} from 'react-router-dom';
import MovieContainer from "./MovieContainer";
import MoviePoster from "./MoviePoster";

const Movie = ({id, medium_cover_image}) => (
  <MovieContainer>
    <Link to={`/${id}`}>
      <MoviePoster bg={medium_cover_image} />
    </Link>
  </MovieContainer>
);

export default Movie;