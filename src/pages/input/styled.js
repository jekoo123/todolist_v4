import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 70px;
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid black;
  padding: 50px;
  gap: 50px;
  border-radius: 15px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  width: 500px;
  gap: 30px;
`;

export const StyledTextArea = styled.input`
  border-radius: 10px;
  border: 0.5px solid black;
  padding-left: 10px;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 70px;
  text-align: center;
  border-radius: 20px;
  color: white;
  background-color: black;
  cursor: pointer;

  &:hover {
    background-color: #c9c9c9;
  }
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const ContentsTextArea = styled.textarea`
  border-radius: 10px;
  border: 0.5px solid black;
  padding: 10px;
  height: 300px;
  margin-top: 30px;
  font-weight: bold;
`;

export const SubmitButton = styled.div`
  position: relative;
  left: 120px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
  text-align: center;
  border-radius: 20px;
  color: white;
  background-color: black;
  cursor: pointer;
  box-shadow: 0px 2px 5px #c9c9c9;
  font-weight: bold;
  &:hover {
    background-color: #c9c9c9;
  }
`;
