import { PushPinSimpleSlash } from "@phosphor-icons/react";

import { Container } from './styles';

export function ShortTask({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {title}
      <PushPinSimpleSlash />
    </Container>
  )
}