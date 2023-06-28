import { FC, memo } from "react";
import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Flex, Stack } from "@chakra-ui/react";

export const ModalContentDetail: FC = memo(() => {
  return (
    <SContetnt>
      <SImageBox>
        <img src="http://www.shiopro.net/wp-content/uploads/2020/08/higashitarumi2-727x1024.jpg" alt="voucher" />
      </SImageBox>
      <STextBox>
          <SText>
            <div className="title">
              <h1>シオヤプロジェクトの勝手にまち探訪</h1>
              <h1>{`vol.10 東垂水`}</h1>
            </div>
            <div className="date">
              <p>2019.05.23 実施</p>
            </div>
          </SText>
          <ButtonGroup gap='2'>
            <Button
              as="a"
              href=""
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
              isDisabled
            >
              記録をみる
            </Button>
            <Button
              as="a"
              href="http://www.shiopro.net/archives/1240"
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="blue"
            >
              開催概要をみる
            </Button>
          </ButtonGroup>
      </STextBox>
    </SContetnt>
  );
})

const SContetnt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 200px;
`;

const SImageBox = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const STextBox = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SText = styled.div`
  & .title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  & .date {
    opacity: 0.7;
  }
`;
