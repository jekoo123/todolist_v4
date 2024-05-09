import styled from "styled-components";

export const StyledMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 100px);
`;

export const MoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 70px;
  text-align: center;
  border-radius: 20px;
  background-color: black;
  cursor: pointer;

  &:hover {

    background-color: #c9c9c9;
  }
`;
