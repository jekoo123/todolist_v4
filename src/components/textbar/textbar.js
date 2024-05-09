import React from "react";
import { StyledTextBar, StyledTextBarContents } from "./styled";

export const TextBar = ({ props }) => {
  return (
    <StyledTextBar>
      <StyledTextBarContents style={{ width: "100px" }}>
        {props.title}
      </StyledTextBarContents>
      <StyledTextBarContents
        style={{
          width: "200px",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
        }}
      >
        {props.timeLimit}
      </StyledTextBarContents>
      <StyledTextBarContents
        style={{
          width: "200px",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
        }}
      >
        {props.contents}
      </StyledTextBarContents>
    </StyledTextBar>
  );
};
