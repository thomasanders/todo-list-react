import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { List, Item, Content, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";


const TasksList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item 
        key={task.id} 
        hidden={task.done && hideDone}>
          <StyledButton
          toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </StyledButton>
          <Content done={task.done}>{task.content}</Content>
          <StyledButton remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </StyledButton>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
