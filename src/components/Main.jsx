import React, { useState } from "react";
import { connect } from "react-redux";
import GroupDisplay from "./GroupDisplay";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { v1 as uuidv1 } from "uuid";
import {
  addGroupAction,
  removeGroupAction,
  toggleGroupAction,
} from "../redux/actions/GroupAction";

const Main = ({ groups, addGroup, removeGroup, toggleGroup }) => {
  const [text, setText] = useState("");

  const handleAddGroup = () => {
    if (text.trim() !== "") {
      addGroup({
        id: uuidv1(),
        groupName: text,
        moneyOwed: 0,
        description: "",
        groupMembers: [],
        completed: false,
      });
      setText("");
    }
  };

  const handleRemoveGroup = (id) => {
    removeGroup(id);
  };

  const handleToggleGroup = (id) => {
    toggleGroup(id);
  };

  return (
    <Box
      sx={{
        backgroundColor: "whitesmoke",
        width: 1,
        height: 600,
        px: 6,
        py: 4,
        boxSizing: "border-box",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a Group..."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" onClick={handleAddGroup}>
            Add New Group
          </Button>{" "}
        </Grid>
      </Grid>

      {groups.map((group, index) => (
        <GroupDisplay
          key={group.id}
          index={index}
          group={group}
          onRemove={handleRemoveGroup}
        />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps state:");
  console.log(state);
  return {
    groups: state.groupsState.groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addGroup: (group) => dispatch(addGroupAction(group)),
  removeGroup: (id) => dispatch(removeGroupAction(id)),
  toggleGroup: (id) => dispatch(toggleGroupAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
