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
import DetailRow from "./DetailRow";
import Movie from "../../components/Movie";
import SuggestionList from "./SuggestionList";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      language
      rating
      medium_cover_image
      description_intro
    }

    suggestions(id: $id) {
      id
      title
      medium_cover_image
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
      <DetailRow>
        <DetailColumn>
          <DetailTitle>{loading ? "Loading..." : data?.movie?.title}</DetailTitle>
          {data?.movie && (
            <>
              <DetailSubtitle>{data?.movie?.language} - {data?.movie?.rating}</DetailSubtitle>
              <DetailDescription>{data?.movie?.description_intro}</DetailDescription>
            </>
          )}
        </DetailColumn>
        {data?.movie && (
          <DetailPoster bg={data?.movie?.medium_cover_image}/>
        )}
      </DetailRow>
      <SuggestionList>
        {data?.suggestions.map(item => (
          <Movie {...item} />
        ))}
      </SuggestionList>
    </DetailContainer>
  );
};

export default Detail;