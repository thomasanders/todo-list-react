import React from "react";
import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../../queryParameters";
import { Wrapper } from "./styled";
import searchQueryParamName from "./searchQueryParamName";

// eslint-disable-next-line
export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter

  const onInputChange = ({ target }) => {
   replaceQueryParameter({
    key: searchQueryParamName,
    value: target.value.trim() !==""? target.value : undefined,
   })
  };

  return (
    <Wrapper>
      <Input
        placeholder="Search tasks"
        value={query || " "}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
