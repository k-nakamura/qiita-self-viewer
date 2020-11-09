import React from "react";
import {Icon, Image, List} from "semantic-ui-react";
import {User} from "../types/User";

function UserListItem(props: { user: User; created_at?: string }) {
  const formatDateTime = (date: string) =>
    `${date.substr(0, 4)}/${date.substr(5, 2)}/${date.substr(8, 2)} ${date.substr(11, 2)}:${date.substr(14, 2)}:${date.substr(17, 2)}`;

  const openUserInNewTab = (id: string) => window.open(`https://qiita.com/${id}`, "_blank");

  return (
    <List.Item>
      <List.Content floated={'right'}>
        {props.created_at !== undefined ? formatDateTime(props.created_at) : ''}
      </List.Content>
      <Image avatar src={props.user.profile_image_url}/>
      <List.Content>
        {props.user.name}
        &nbsp;
        {`@${props.user.id}`}
        &nbsp;
        <Icon name={'external alternate'} size={'small'}
              link onClick={() => openUserInNewTab(props.user.id)}/>
      </List.Content>
    </List.Item>
  )
}

export default UserListItem;