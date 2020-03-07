import * as React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({id}) => (
  <div>
    <Link to={`/${id}`}>{id}</Link>
  </div>
);

export default Movie;