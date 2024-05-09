import styled from "styled-components";

export const StyledTextBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  width: 500px;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const StyledTextBarContents = styled.div`
  text-align: center;
  font-size: 21px;
`;
