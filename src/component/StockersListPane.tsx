import React from "react";
import {List, Tab} from "semantic-ui-react";
import UserListItem from "./UserListItem";
import {User} from "../dto/User";


function StockersListPane(props: { stockers: User[]; }) {
  return (
    <Tab.Pane>
      <List verticalAlign={'middle'} divided className={'separated'}>
        {
          props.stockers.map(stocker => <UserListItem user={stocker} key={`stock_${stocker.id}`}/>)
        }
      </List>
    </Tab.Pane>
  )
}

export default StockersListPane;