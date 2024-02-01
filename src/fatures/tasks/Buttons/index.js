import { selectTasks, toggleHideDone } from "../tasksSlice";
import { Button, StyledButtons } from "./styled";
import {useDispatch, useSelector } from "react-redux";

const Buttons = ({ setAllDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
  return (
    tasks.length > 0 && (
      <Button>
        <StyledButtons onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Show" : "Hide"} Done
        </StyledButtons>
        <StyledButtons
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Mark all tasks Done
        </StyledButtons>
      </Button>
    )
  );
};

export default Buttons;
