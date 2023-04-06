import ContainerEntity from "../container-entity";
import styles from "./container-background-img.module.css";

const ContainerBackgroundImg: React.FC<ContainerEntity> = ({ children }) => {
  return <div className={styles["container-background-img"]}>{children}</div>;
};

export default ContainerBackgroundImg;
