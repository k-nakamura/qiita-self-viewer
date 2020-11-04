import React from "react";
import {Icon, Label, List} from "semantic-ui-react";
import Item from "../dto/Item";


const formatDateTime = (date: string) =>
  `${date.substr(0, 4)}/${date.substr(5, 2)}/${date.substr(8, 2)} ${date.substr(11, 2)}:${date.substr(14, 2)}:${date.substr(17, 2)}`;


const paddingCount = (count: number) => count.toString().padStart(4, ' ');

function ItemListItem(props: {
  item: Item;
  setID: React.Dispatch<React.SetStateAction<string>>
}) {
  const openItemInNewTab = (url: string) => window.open(url, "_blank");

  return (
    <List.Item>
      <List.Content floated={'right'}>
        {formatDateTime(props.item.created_at)}
      </List.Content>
      <List.Header>
        {props.item.title}
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
                        props.setID(props.item.id);
                      }
                    }}
      >
        {`ストック`}
        <Icon name={'angle right'}/>
      </List.Content>
      <List.Content floated={'right'} as={'a'}
                    onClick={() => {
                      if (props.item.id !== undefined) {
                        props.setID(props.item.id);
                      }
                    }}
      >
        {`LGTM: ${props.item.likes_count !== undefined ? paddingCount(props.item.likes_count) : ''}`}
        <Icon name={'angle right'}/>
      </List.Content>
    </List.Item>
  )
}

export default ItemListItem;