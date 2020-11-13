import React from "react";
import {List, Tab} from "semantic-ui-react";
import UserListItem from "./UserListItem";
import {useSelector} from "react-redux";


function LikesListPane() {
  const likes = useSelector(state => state.item.selected.likes);

  return (
    <Tab.Pane>
      <List verticalAlign={'middle'} divided className={'separated'}>
        {
          likes.map(like =>
            <UserListItem user={like.user} created_at={like.created_at} key={`like_${like.user.id}`}/>)
        }
      </List>
    </Tab.Pane>
  )
}

export default LikesListPane;