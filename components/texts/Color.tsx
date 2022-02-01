import styled from "styled-components";
import { CS_BLUE, CS_RED } from "../../styles/Theme";
import { plusMinus } from "../../types/style/color";

export const PlusMinus = styled.span<plusMinus>`
  color: ${(props) => (props.isPlus ? CS_RED : CS_BLUE)};
`;
