import styled from "styled-components"
import { scale } from "../../utils/typography"

export const Container = styled.div`
  padding: 0 0.5rem;
  max-width: 72em;
  margin: 0 auto;
`
export const ContentBox = styled.div`
  margin: 0 auto;
  background-color: rgb(23, 23, 23);
  color: white;
  border-radius: 0.75rem;
  padding: 2em;
  ${scale(1 / 12)};

  @media (min-width: 61.25em) {
    padding: 3em;
    ${scale(1 / 6)};
  }
`
