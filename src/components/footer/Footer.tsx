import React from "react";
import Container from "../container/Container";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <Container>
      <div className={styles.wrapper}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, excepturi quas. Reiciendis, obcaecati labore
        quas totam voluptate officiis et recusandae unde possimus perspiciatis, dolore, harum vel quasi est neque ab!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, vero eaque beatae veritatis nemo fuga
        perferendis officiis impedit commodi velit expedita eveniet aliquid ipsum ullam?
      </div>
    </Container>
  );
};

export default Footer;
