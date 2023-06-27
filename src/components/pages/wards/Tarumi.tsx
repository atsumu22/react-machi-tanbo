import { FC, useState } from "react";
import styled from '@emotion/styled';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import tarumi from "../../../data/Tarumi.json";
import record from "../../../data/Record.json"

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

export const Tarumi:FC = () => {
  const [isVisited, setIsVisited] = useState(false);

  return (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    <motion.li
      style={{ height: "90vh" }}
      className="item"
      variants={item}
      transition={{
        ease: "linear",
        duration: 1,
      }}
    >
      <SMap>
      <svg height="100%" viewBox="0 0 1870 1733.24" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
        {Object.values(tarumi).map((town, index) => (
          <Link to={`/home/${Object.keys(tarumi)[index]}`}>
            <SPath d={town.d} key={index} className={isVisited ? "marked": ""} />
          </Link>
        ))}
      </svg>
      </SMap>
    </motion.li>
  </motion.ul>

  );
};

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
  fill: #2C7A7B;
 }
 &.marked {
  fill: #4FD1C5;
  &:hover {
    fill: #2C7A7B;
   }
 }
`;

const SMap = styled.div`
  height: 100%;
  width: auto;
`;
