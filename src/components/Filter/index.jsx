import { Container } from './styles';

export function Filter({ title, selected, ...rest }) {
  return (
    <Container type="button" selected={selected} {...rest}>
      {title}
    </Container>
  )
}