import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Download example tasks
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? " Show" : "Hide"} tasks done
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Mark All Tasks Done
          </Button>
        </>
      )}
    </Wrapper>
  );
};
export default Buttons;
