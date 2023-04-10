import ContainerBackgroundImg from '../../../containers/container-background-img/container-background-img';
import Container from '../../../containers/container/container';
import ContainerEntity from '../../../containers/container-entity';

const MainBackground: React.FC<ContainerEntity> = ({ children }) => {
  return (
    <ContainerBackgroundImg>
      <Container>{children}</Container>
    </ContainerBackgroundImg>
  );
};

export default MainBackground;
