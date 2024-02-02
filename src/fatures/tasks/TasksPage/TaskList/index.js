import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import {
  
  selectTaskByQuery,
  toggleTaskDone,
  removeTask,
  selectHideDone,
} from "../../tasksSlice";
import { List, Item, Content, StyledButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import searchQueryParamname from "../../TaskPage/searchQueryParamname";

const TasksList = () => {
  const location = useLocation();
 
  const query= (new URLSearchParams(location.search)).get(searchQueryParamname);

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <StyledButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </StyledButton>
          <Content done={task.done}>
            <Link to={`/tasks/${task.id}`}> {task.content}</Link>
          </Content>
          <StyledButton remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </StyledButton>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
