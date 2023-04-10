import ContainerPropsEntity from '../container-entity';
import styles from './container-background-img.module.css';

const ContainerBackgroundImg: React.FC<ContainerPropsEntity> = ({
  children,
}) => {
  return <div className={styles['container-background-img']}>{children}</div>;
};

export default ContainerBackgroundImg;
