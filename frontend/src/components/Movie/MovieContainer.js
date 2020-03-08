import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);

  > :first-child {
    flex: 1;
  }
`;

export default MovieContainer;