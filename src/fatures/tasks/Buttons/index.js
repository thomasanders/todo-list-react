import { Button, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <Button>
            <StyledButtons onClick={toggleHideDone}>
                {hideDone ? "Show" : "Hide"} Done
            </StyledButtons>
            <StyledButtons
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}>
                Mark all tasks Done
            </StyledButtons>
        </Button>
    )
);

export default Buttons;