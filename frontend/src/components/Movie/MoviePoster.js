import styled from 'styled-components';

const MoviePoster = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default MoviePoster;