import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <motion.div
      className="details"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h3>Details</h3>

      <div></div>
      <span>
        <Link to="/">{`> 돌아가기! <`}</Link>
      </span>
    </motion.div>
  );
};
