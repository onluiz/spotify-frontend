import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayCircleFilledOutlined from "@material-ui/icons/PlayCircleFilledOutlined";
import { idgen } from "../../core/utils";

const R = require("ramda");

const PlayListItemsContainer = () => {
  const list = useSelector((state) => state.playlist.list);
  return (
    <List>
      {!R.isEmpty(list) &&
        list.map((item) => (
          <ListItem key={idgen()} button>
            <ListItemIcon>
              <PlayCircleFilledOutlined />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.description} />
          </ListItem>
        ))}
    </List>
  );
};

export { PlayListItemsContainer };
