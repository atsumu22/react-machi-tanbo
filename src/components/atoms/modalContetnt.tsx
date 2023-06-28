import { FC, memo } from "react";
import styled from "@emotion/styled";
import { Button, ButtonGroup } from "@chakra-ui/react";

import { Record } from "../../types/record";

type Props = {
  record: Record | null;
}

export const ModalContentDetail: FC<Props> = memo((props) => {
  const { record } = props;

  return (
    <SContetnt>
      <SImageBox>
        <img src={record?.imageUrl} alt="voucher" />
      </SImageBox>
      <STextBox>
          <SText>
            <div className="title">
              <h1>シオヤプロジェクトの勝手にまち探訪</h1>
              <h1>{`vol.${record?.id} ${record?.title}`}</h1>
            </div>
            <div className="date">
              <p>{`${record?.date}実施`}</p>
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
              href={record?.url}
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
