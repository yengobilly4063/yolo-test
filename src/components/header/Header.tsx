import React from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Container from "../container/Container";

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <img src={logo} alt="Bitcasino.io" />
      </Container>
    </div>
  );
};

export default Header;
