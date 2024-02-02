import React from "react";
import Input from "../../Input";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Wrapper } from "./styled";
import searchQueryParamname from "../../TaskPage/searchQueryParamname";

// eslint-disable-next-line
export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamname);

  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamname);
    } else {
      searchParams.set(searchQueryParamname, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
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
