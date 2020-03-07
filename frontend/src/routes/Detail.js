import * as React from 'react';
import {useParams} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

const Detail = () => {
  const {id} = useParams();
  const {loading, data} = useQuery(GET_MOVIE, {
    variables: {id: Number(id) || 0},
  });


  if (loading) {
    return "loading";
  } else if (data && data.movie) {
    return data.movie.title;
  }
};

export default Detail;