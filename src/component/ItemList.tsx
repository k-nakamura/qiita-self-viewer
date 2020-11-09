import React from "react";
import {Icon, Label, List} from "semantic-ui-react";
import {Item} from "../types/Item";
import {useDispatch} from "react-redux";
import {selectItem} from "../redux/action/ItemAction";

function ItemListItem(props: { item: Item; }) {
  const formatDateTime = (date: string) =>
    `${date.substr(0, 4)}/${date.substr(5, 2)}/${date.substr(8, 2)} ${date.substr(11, 2)}:${date.substr(14, 2)}:${date.substr(17, 2)}`;

  const paddingCount = (count: number) => count.toString().padStart(4, ' ');
  const openItemInNewTab = (url: string) => window.open(url, "_blank");

  const dispatch = useDispatch();
  const setItem = (id: string, category: string) => dispatch(selectItem(id, category));

  return (
    <List.Item>
      <List.Content floated={'right'}>
        {formatDateTime(props.item.created_at)}
      </List.Content>
      <List.Header>
        {props.item.title}
        &nbsp;
        <Icon name={'external alternate'} link
              onClick={() => props.item.url !== undefined ? openItemInNewTab(props.item.url) : {}}/>
      </List.Header>
      <List.Description className={'item-tag'}>
        <Icon name={'tag'} size={'small'}/>
        {props.item.tags.map((t, i) =>
          <Label key={`tag_${props.item.title}_${i}`} size={'mini'}>
            {t.name}
          </Label>
        )}
      </List.Description>
      <List.Content floated={'right'} as={'a'}
                    onClick={() => {
                      if (props.item.id !== undefined) {
                        setItem(props.item.id, '1');
                      }
                    }}
      >
        {`ストック`}
        <Icon name={'angle right'}/>
      </List.Content>
      <List.Content floated={'right'} as={'a'}
                    onClick={() => {
                      if (props.item.id !== undefined) {
                        setItem(props.item.id, '0');
                      }
                    }}
      >
        {`LGTM: ${props.item.likes_count !== undefined
          ? paddingCount(props.item.likes_count) : ''}`}
        <Icon name={'angle right'}/>
      </List.Content>
    </List.Item>
  )
}

function ItemList(props: { items: Item[]; }) {
  return (
    <div>
      <List divided className={'separated'}>
        {
          props.items.map(item =>
            <ItemListItem item={item} key={item.id}/>)
        }
      </List>
    </div>
  )
}

export default ItemList;