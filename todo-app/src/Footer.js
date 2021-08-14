import React, {useState} from 'react';

import { withRouter } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import TodoIcon from '@material-ui/icons/AssignmentTurnedIn';
import ScheduleIcon from '@material-ui/icons/CalendarToday';
import NoteIcon from '@material-ui/icons/EventNote';

const Footer = (props) => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      showLabels
      style={{width: "100%"}}
    >
      <BottomNavigationAction
        label = "Todo"
        icon = {<TodoIcon />}
        onClick = {() => {
          props.history.push("/todo");
        }}
      />
      <BottomNavigationAction
        label = "Schedule"
        icon = {<ScheduleIcon />}
        onClick = {() => {
          props.history.push("/schedule");
        }}
      />
      <BottomNavigationAction
        label = "Note"
        icon = {<NoteIcon />}
        onClick = {() => {
          props.history.push("/note");
        }}
      />
    </BottomNavigation>
  );
}

export default withRouter(Footer);
