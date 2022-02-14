import React from "react";
import Container from "../../container/Container";
import Header from "../../header/Header";
import styles from "./MainLayout.module.scss";
import capricon from "../../../assets/figure.png";
import fancyBg from "../../../assets/bg.png";

interface IProps {
  children?: React.FC | JSX.Element | Array<JSX.Element>;
}
const MainLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.capricon}>
        <img src={capricon} alt="" />
      </div>
      <div className={styles.bgimg}>
        <img src={fancyBg} alt="" />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <Container>
        <div className={styles.children}>{children}</div>
      </Container>
    </div>
  );
};

export default MainLayout;
