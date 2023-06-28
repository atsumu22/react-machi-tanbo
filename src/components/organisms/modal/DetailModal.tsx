import { FC, memo } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'

import { ModalContentDetail } from "../../atoms/modalContetnt";
import { Record } from "../../../types/record";

type Props = {
  records: Array<Record>;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: FC<Props> = memo((props) => {
  const { records, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={3}>
          {records.map((record) => <ModalContentDetail record={record}/>)}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
