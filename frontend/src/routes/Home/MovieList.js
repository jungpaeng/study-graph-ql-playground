import styled from "styled-components";

const MovieList = styled.div`
  position: relative;
  top: -50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
`;

export default MovieList;