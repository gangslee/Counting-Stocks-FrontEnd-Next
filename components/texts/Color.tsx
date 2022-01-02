import styled from "styled-components";
import { plusMinus } from "../../types/style/color";

export const PlusMinus = styled.span<plusMinus>`
  color: ${(props) => (props.isPlus ? "#dd4a4a" : "#4a4add")};
`;
