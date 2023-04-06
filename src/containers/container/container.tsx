import ContainerEntity from "../container-entity";
import styles from "./container.module.css";

const Container: React.FC<ContainerEntity> = ({ children }) => {
  return <div className={styles.container}>Container</div>;
};

export default Container;
