import React from "react";
import {List, Segment, Tab} from "semantic-ui-react";
import UserListItem from "./UserListItem";
import {User} from "../types/User";


function StockersListPane(props: { stockers: User[]; readMore: () => void; hasMore: boolean; disableMore: boolean }) {
  return (
    <Tab.Pane>
      <List verticalAlign={'middle'} divided className={'separated'}>
        {
          props.stockers.map(stocker => <UserListItem user={stocker} key={`stock_${stocker.id}`}/>)
        }
      </List>
      {props.hasMore
        ? <Segment textAlign={'center'}
                   attached
                   secondary
                   content={'Read More'}
                   disabled={props.disableMore}
                   onClick={props.readMore}
        />
        : ''}
    </Tab.Pane>
  )
}

export default StockersListPane;