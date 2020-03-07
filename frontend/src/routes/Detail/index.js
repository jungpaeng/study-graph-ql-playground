import * as React from 'react';
import {useParams} from 'react-router-dom';
import {gql} from 'apollo-boost';
import {useQuery} from "@apollo/react-hooks";
import DetailContainer from "./DetailContainer";
import DetailColumn from "./DetailColumn";
import DetailTitle from "./DetailTitle";
import DetailSubtitle from "./DetailSubtitle";
import DetailDescription from "./DetailDescription";
import DetailPoster from "./DetailPoster";

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

  return (
    <DetailContainer>
      <DetailColumn>
        <DetailTitle>Name</DetailTitle>
        <DetailSubtitle>English · 4.5</DetailSubtitle>
        <DetailDescription>lorem ipsum lalalla </DetailDescription>
      </DetailColumn>
      <DetailPoster />
    </DetailContainer>
  );
};

export default Detail;