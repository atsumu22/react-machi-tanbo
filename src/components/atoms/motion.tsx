import { FC } from "react";
import { motion } from "framer-motion"
import styled from '@emotion/styled'

export const Motion: FC = () => {
  return (
    <SDiv>
	  <motion.div
	    initial={{ opacity: 0 }}
	    animate={{ opacity: 1, y: [50, 0] }}
	    transition={{ duration: 0.8, ease: "easeOut" }}
	  >
	    Hello, framer motion.
	  </motion.div>
	</SDiv>
  );
};

const SDiv = styled.div`
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 3rem;
  color: #333;
`;
