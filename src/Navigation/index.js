import React from "react";
import { toAuthor, toTasks } from "../routes";
import{ List , Item , StyledNavLink} from ".styled";

export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}>About Me</StyledNavLink>
                </Item>
            </List>
        </nav>
    );
};