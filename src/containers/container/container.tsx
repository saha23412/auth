import ContainerPropsEntity from '../container-entity';
import styles from './container.module.css';

const Container: React.FC<ContainerPropsEntity> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
