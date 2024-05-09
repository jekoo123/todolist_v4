export const SET_CONTENTS = "SET_CONTENTS";

export function setContents(contents) {
  return {
    type: SET_CONTENTS,
    payload: contents,
  };
}
