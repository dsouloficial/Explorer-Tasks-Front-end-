import { Circle, CheckCircle, PushPinSimple, PushPinSimpleSlash } from "@phosphor-icons/react";

import { Container, Details } from './styles';
import { useTheme } from "styled-components";

export function Task({ data, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container type="button" $done={data.done} {...rest}>
      {data.done ? <CheckCircle /> : <Circle />}

      <Details>
        <span>{data.title}</span>
        <small>{data.project}</small>
      </Details>

      {
        data.priority
          ? <PushPinSimpleSlash color={COLORS.RED_200} />
          : <PushPinSimple color={COLORS.GRAY_400} />
      }
    </Container>
  )
}