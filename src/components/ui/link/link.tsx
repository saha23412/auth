import { Link } from 'react-router-dom';
import LinkPropsEntity from './link-entity';
import styles from './link.module.css';

const LinkCustom: React.FC<LinkPropsEntity> = ({ path, children, onClick }) => {
  return (
    <Link className={styles['my-link']} to={path}>
      {children}
    </Link>
  );
};

export default LinkCustom;
