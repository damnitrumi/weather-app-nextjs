import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  ${() => css`
    padding:20px;
    min-width: 200px;
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);

    @media (min-width: 640px){
      flex-grow: 2;
    }

    @media (min-width: 1024px){
      padding: 40px;
    }
  `}
`;
