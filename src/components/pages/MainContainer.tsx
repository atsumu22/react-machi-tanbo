import { FC, ReactNode, memo } from "react";
import styled from "@emotion/styled";

type Props = {
  children: ReactNode;
}

export const MainContainer:FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <SBody>
      {children}
    </SBody>
  )
});

const SBody = styled.div`

`;
