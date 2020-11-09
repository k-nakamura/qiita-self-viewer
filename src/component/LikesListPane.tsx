import React from "react";
import {Like} from "../types/Like";
import {List, Tab} from "semantic-ui-react";
import UserListItem from "./UserListItem";


function LikesListPane(props: { likes: Like[]; }) {
  return (
    <Tab.Pane>
      <List verticalAlign={'middle'} divided className={'separated'}>
        {
          props.likes.map(like =>
            <UserListItem user={like.user} created_at={like.created_at} key={`like_${like.user.id}`}/>)
        }
      </List>
    </Tab.Pane>
  )
}

export default LikesListPane;