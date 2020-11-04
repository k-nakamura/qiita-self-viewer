import React from "react";
import {List} from "semantic-ui-react";
import ItemListItem from "./ItemListItem";
import Item from "../dto/Item";


function ItemList(props: {
  items: Item[];
  setID: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <div>
      <List divided>
        {props.items.map(item =>
          <ItemListItem item={item} setID={props.setID} key={item.id}/>)
        }
      </List>
    </div>
  )
}

export default ItemList;