import React from "react";
import styles from "./Loading.module.scss";

const Loading: React.FC = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <span className={styles.loading}></span>
      </div>
    </React.Fragment>
  );
};

export default Loading;
