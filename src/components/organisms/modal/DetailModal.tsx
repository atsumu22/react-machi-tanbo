import { FC, memo } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Button,
  Flex,
  ButtonGroup,
  Spacer,
  Box,
} from '@chakra-ui/react'
import { ModalContentDetail } from "../../atoms/modalContetnt";

type Props = {
  // id: number;
  // title: string;
  // ward: string;
  // date: string;
  // area: string[],
  // imageUrl: string;
  // url: string;
  isOpen: boolean;
  onClose: () => void;
}

export const DetailModal: FC<Props> = memo((props) => {
  // const {
    // id, title, ward, date, area, imageUrl, url, isOpen, onClose } = props;
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={3}>
          <ModalContentDetail />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
