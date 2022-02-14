import React from "react";
import styles from "./Container.module.scss";

interface IProps {
  children?: React.FC | JSX.Element | Array<JSX.Element> | string;
  width?: number;
}
const Container: React.FC<IProps> = ({ children, width }) => {
  const containerWidth = width ? width : 80;
  return (
    <div className={styles.container} style={{ width: `${containerWidth}%` }}>
      {children}
    </div>
  );
};

export default Container;
