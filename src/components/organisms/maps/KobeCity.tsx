import React from 'react';
import styled from '@emotion/styled';
import { motion } from "framer-motion";

import KobeWards from "../../../KobeWards.json";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export const KobeCity = () => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.li
      className="item"
      variants={item}
      transition={{
        ease: "linear",
        duration: 1,
      }}
    >
      <SMap>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          strokeMiterlimit={10}
          viewBox="0 0 1308 885"
        >
          {Object.values(KobeWards).map((ward, index) => (
              <SPath d={ward} key={index} />
          ))}
        </svg>
      </SMap>
    </motion.li>
  </motion.ul>
)

const SPath = styled.path`
 fill: #fff;
 stroke: #000;
 stroke-linecap: round;
 stroke-width: 2px;
 stroke-linejoin: round;
 fill-rule: evenodd;
 cursor: pointer;
 transition: fill 0.3s linear;
 &:hover {
  fill: rgb(175, 255, 2);
 }
`;

const SMap = styled.div`
  height: auto;
  width: 100%;
`;
