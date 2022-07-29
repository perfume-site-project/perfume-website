import React, { Component } from "react";
import styles from "../../assets/css/Layout/Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
