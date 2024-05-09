import React from "react";
import {
  StyledSearchContainer,
  StyledSearchBox,
  StyledTextBar,
  StyledTextBarContents,
} from "./styled";

import { BoldText } from "../../components/globalStyle";
import { useSelector } from "react-redux";
import { TextBar } from "../../components/textbar/textbar";

export const Search = () => {
  const contents = useSelector((state) => state.contents);

  return (
    <StyledSearchContainer>
      <BoldText style={{ marginTop: "30px", marginBottom: "30px" }}>
        {" "}
        Search
      </BoldText>
      <StyledSearchBox>
        <StyledTextBar>
          <StyledTextBarContents style={{ width: "100px" }}>
            Title
          </StyledTextBarContents>
          <StyledTextBarContents
            style={{
              width: "200px",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
            }}
          >
            Time Limit
          </StyledTextBarContents>
          <StyledTextBarContents
            style={{
              width: "200px",
              borderLeftWidth: "1px",
              borderLeftStyle: "solid",
            }}
          >
            Contents
          </StyledTextBarContents>
        </StyledTextBar>
        {contents?.map((e, i) => {
          return <TextBar key={indexedDB} props={e} />;
        })}
      </StyledSearchBox>
    </StyledSearchContainer>
  );
};
