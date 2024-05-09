import styled from "styled-components";

export const StyledHeaderContainer = styled.div`
  display: flex;
  padding: 20px 50px;
  box-shadow: 0 5px 10px #c9c9c9;
  gap: 50px;
`;

export const StyledButton = styled.div`
  background-color: black;
  color: white;
  font-size: 21px;
  font-weight: bold;
  text-align: center;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: #c9c9c9;
  }
`;
