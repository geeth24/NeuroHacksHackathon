import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#ed547c" : "#f6efde")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#f6efde" : "#ed547c")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-weight: 900;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${({ dark }) => (dark ? "#ed547c" : "#f6efde")};
    background: ${({ primary }) => (primary ? "#f6efde" : "#ed547c")};
  }
`;