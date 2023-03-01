import * as Styled from "./styles";

export type BgContainerProps = {
  children: React.ReactNode;
  bgSelection: string;
};

export const BgContainer = ({ children, bgSelection }: BgContainerProps) => {
  const bgUrl = `/assets/images/${bgSelection}.jpg`;
  return <Styled.Wrapper bgSelection={bgUrl}>{children}</Styled.Wrapper>;
};
