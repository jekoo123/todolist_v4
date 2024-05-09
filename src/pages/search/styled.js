import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSearchBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #c9c9c9;
`;

export const StyledTextBar = styled.div`
  display: flex;
  gap: 20px;
  padding: 5px;
  width: 500px;
  cursor: pointer;
  border-bottom-width: 0.5px;
  border-bottom-style: solid;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const StyledTextBarContents = styled.div`
  text-align: center;
  font-size: 21px;
  font-weight: bold;
`;
