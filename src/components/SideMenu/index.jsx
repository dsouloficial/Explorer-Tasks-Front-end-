import {
  CheckCircle,
  House,
  Folder,
  PlusSquare,
  Note,
  SignOut,
  X,
} from "@phosphor-icons/react";

import { Container, Footer, Nav, Title, Header, Button } from "./styles";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header>
        <Title>
          <CheckCircle /> e-Tasks
        </Title>

        {menuIsOpen && 
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        }
      </Header>

      <Nav>
        <a href="#" data-menu-active="true">
          <House /> Home
        </a>
        <a href="#">
          <PlusSquare /> Nova tarefa
        </a>
        <a href="#">
          <Folder /> Projetos
        </a>
        <a href="#">
          <Note /> Relatórios
        </a>
      </Nav>

      <Footer>
        <img src="https://github.com/dsouloficial.png" alt="Foto do usuário" />
        <div>
          <strong>Denilson Bernardo</strong>
          <small>denilsonbnascimento07@gmail.com</small>
        </div>

        <Button type="button">
          <SignOut />
        </Button>
      </Footer>
    </Container>
  );
}
