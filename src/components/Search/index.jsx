import { MagnifyingGlass } from "@phosphor-icons/react";
import { tasks } from "../../utils/tasks";

import { Input } from '../Input';
import { Filter } from "../Filter";

import { Container, Filters } from './styles';

export function Search({ filter, setFilter }) {
  const pending = tasks.filter((task) => !task.done);
  const finished = tasks.filter((task) => task.done);

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
        placeholder="Pesquisar tarefa pelo nome..."
      />

      <Filters>
        <Filter
          title={`Tudo (${tasks.length})`}
          onClick={() => setFilter("all")}
          selected={filter === "all"}
        />

        <Filter
          title={`Pendentes (${pending.length})`}
          onClick={() => setFilter("pending")}
          selected={filter === "pending"}
        />

        <Filter
          title={`Finalizados (${finished.length})`}
          onClick={() => setFilter("finished")}
          selected={filter === "finished"}
        />
      </Filters>
    </Container>
  );
};