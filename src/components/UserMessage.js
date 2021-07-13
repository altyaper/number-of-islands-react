import { memo } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const UserMessage = () => (
  <Container>
    <Jumbotron>
        <h4 className='text-center'>Generate a world by setting Width and Height</h4>
    </Jumbotron>
    </Container>
);

export default memo(UserMessage);
    