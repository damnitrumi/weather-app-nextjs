import styled, { css } from "styled-components";
import { BgContainerProps } from ".";

export const Wrapper = styled.article<Pick<BgContainerProps, "bgSelection">>`
  ${({ bgSelection }) => css`
    display: flex;
    flex-direction: column;
    background-image: url(${bgSelection});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    @media(min-width: 640px){
      flex-direction: row;
    }

    @media(min-width: 768px){
      aspect-ratio: 16/9;
      height: auto;
      max-width: 1000px;
      border-radius: 10px;
      overflow: hidden;

    }
  `}
`;
