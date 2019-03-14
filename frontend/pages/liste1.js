import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemText from "@material-ui/core/ListItemText";

const Liste1 = ({ element1, delEle }) => (
  <List className="data-whiteholder">
    {element1.map((ele1, index) => (
      <ListItem key={index.toString()} dense button>
        <Checkbox tabIndex={-1} disableRipple />
        <ListItemText primary={ele1} />

        <IconButton
          aria-label="Slett"
          onClick={() => {
            delEle(index);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
);

export default Liste1;
