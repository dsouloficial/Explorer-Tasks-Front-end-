import { Task } from "../Task";
import { Container } from './styles';

export function Tasks({ data }) {
  return (
    <Container>
      {
        data.map((task) => (
          <Task
            key={task.id}
            data={task}
          />
        ))
      }
    </Container>
  );
};