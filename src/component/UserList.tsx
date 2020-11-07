import React, {useEffect, useState} from "react";
import {Header, List, Segment, Tab} from "semantic-ui-react";
import {Item} from "../dto/Item";
import {Like} from "../dto/Like";
import {User} from "../dto/User";
import {getItem} from "../api/Items";
import {getLikes} from "../api/Likes";
import {getStockers} from "../api/Stockers";
import LikesListPane from "./LikesListPane";
import StockersListPane from "./StockersListPane";


function UserList(props: { id: string; }) {
  const [item, setItem] = useState<Item | null>(null);
  const [likes, setLikes] = useState<Like[]>([]);
  const [stockers, setStockers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      if (props.id !== '') {
        setLoading(true);
        Promise.all(
          [
            getItem(props.id),
            getLikes(props.id, 1),
            getStockers(props.id),
          ],
        ).then(r => {
          setItem(r[0]);
          setLikes(r[1]);
          setStockers(r[2]);
          setPage(1);
          setLoading(false);
        });
      }
    }, [props.id]
  );

  return (
    <Segment loading={loading}>
      <Header>
        {item !== null ? item.title : ''}
      </Header>
      <List divided>
        <Tab panes={[
          { menuItem: 'LGTM', render: () => <LikesListPane likes={likes}/> },
          { menuItem: 'ストック', render: () => <StockersListPane stockers={stockers}/> },
        ]}/>
      </List>
    </Segment>
  )
}

export default UserList;