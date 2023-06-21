import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "green.600",
        color: "gray.800"
      }
    }
  }
});

export default theme;
