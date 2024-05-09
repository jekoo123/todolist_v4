import React, { useState } from "react";
import { BoldText, NormalText } from "../../components/globalStyle";
import {
  StyledInputContainer,
  StyledInputBox,
  HorizontalContainer,
  StyledTextArea,
  ContentsContainer,
  SubmitButton,
  ContentsTextArea,
} from "./styled";

import { useDispatch } from "react-redux";

import { setContents } from "../../storage/actions";

export const Input = () => {
  const [title, setTitle] = useState("");
  const [timeLimit, setTimeLimit] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (title === "" || timeLimit === "" || content === "") {
        alert("Complete your Input");
      } else {
        submit();
      }
    }
  };

  const submit = () => {
    dispatch(
      setContents({ title: title, timeLimit: timeLimit, contents: content })
    );
    setTitle("");
    setTimeLimit("");
    setContent("");
    alert("Your Content is saved.");
  };

  return (
    <StyledInputContainer>
      <BoldText style={{ marginBottom: "50px" }}>What should you do?</BoldText>
      <StyledInputBox>
        <HorizontalContainer>
          <NormalText>Title : </NormalText>
          <StyledTextArea
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SubmitButton onClick={submit}>Submit</SubmitButton>
        </HorizontalContainer>

        <HorizontalContainer>
          <NormalText>Time Limit : </NormalText>
          <StyledTextArea
            type="text"
            placeholder="Time Limit"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </HorizontalContainer>

        <ContentsContainer>
          <NormalText>Contents : </NormalText>
          <ContentsTextArea
            type="text"
            placeholder="Contents"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </ContentsContainer>
      </StyledInputBox>
    </StyledInputContainer>
  );
};
