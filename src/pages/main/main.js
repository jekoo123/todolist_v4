import React from "react";
import { StyledMainContainer, MoveButton } from "./styled";

import { BoldText } from "../../components/globalStyle";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const navigate = useNavigate();

  return (
    <StyledMainContainer>
      <MoveButton onClick={() => navigate("/input")}>
        <BoldText style={{ color: "white" }}>Move to Todo List</BoldText>
      </MoveButton>
    </StyledMainContainer>
  );
};
