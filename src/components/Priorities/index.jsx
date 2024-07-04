import { Fire } from "@phosphor-icons/react";

import { Container, Header, Tasks } from './styles';
import { ShortTask } from "../ShortTask";
import { tasks } from "../../utils/tasks";

export function Priorities() {
  return (
    <Container>
      <Header>
        <h1>
          <Fire />
          Prioridades
        </h1>

        <small>2</small>
      </Header>

      <Tasks>
        {
          tasks
            .filter((task) => task.priority)
            .map((task) => (
              <ShortTask key={task.id} title={task.title} />
            ))
        }
      </Tasks>
    </Container>
  )
}