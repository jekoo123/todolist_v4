import React from "react";
import { StyledHeaderContainer, StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeaderContainer>
      <StyledButton
        onClick={() => {
          navigate("/main");
        }}
      >
        Home
      </StyledButton>
      <StyledButton
        onClick={() => {
          navigate("/input");
        }}
      >
        Input
      </StyledButton>
      <StyledButton
        onClick={() => {
          navigate("/search");
        }}
      >
        Search
      </StyledButton>
    </StyledHeaderContainer>
  );
};
