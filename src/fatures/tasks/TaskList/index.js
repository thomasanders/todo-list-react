import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";
import { List, Item, Content, Buttons } from "./styled";
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
          <Buttons
          toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Buttons>
          <Content done={task.done}>{task.content}</Content>
          <Buttons remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Buttons>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
