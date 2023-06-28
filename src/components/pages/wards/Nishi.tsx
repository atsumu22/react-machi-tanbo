import { FC } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Box,
} from '@chakra-ui/react'

const array: Array<string> = ["a", "b", "c", "d"];

export const Nishi = () => {
  return (
    <>
    {array.map((elm) => (
      <Popover>
      <PopoverTrigger>
        <div>
          <h1>西区！</h1>
          <h1>{`${elm}`}</h1>
        </div>
      </PopoverTrigger>
      <PopoverContent bg='tomato' color='white'>
        <PopoverHeader fontWeight='semibold'>Customization</PopoverHeader>
        <PopoverArrow bg='pink.500' />
        <PopoverCloseButton bg='purple.500' />
        <PopoverBody>
          Tadaa!! The arrow color and background color is customized. Check the
          props for each component.
        </PopoverBody>
      </PopoverContent>
    </Popover>
    ))}


      </>
  );
};
