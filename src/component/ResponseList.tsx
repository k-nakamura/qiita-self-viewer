import React, {useEffect, useState} from "react";
import {Header, Segment, Tab} from "semantic-ui-react";
import {Item} from "../types/Item";
import {Like} from "../types/Like";
import {User} from "../types/User";
import {getItem} from "../api/Items";
import {getLikes} from "../api/Likes";
import {getStockers} from "../api/Stockers";
import LikesListPane from "./LikesListPane";
import StockersListPane from "./StockersListPane";
import {useDispatch, useSelector} from "react-redux";
import {selectItem} from "../redux/action/ItemAction";

function ResponseList() {
  const [item, setItem] = useState<Item | null>(null);
  const [likes, setLikes] = useState<Like[]>([]);
  const [stockers, setStockers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const {selectedID, selectedCategory} = useSelector(state => state.item);
  const dispatch = useDispatch();
  const handleTabChange = (id: string, category: string | number | undefined) => {
    switch (typeof category) {
      case "string":
        dispatch(selectItem(id, category))
        break;
      case "number":
        dispatch(selectItem(id, category.toString()))
        break;
      default:
        break;
    }
  };

  useEffect(() => {
      if (selectedID !== '') {
        setLoading(true);
        Promise.all(
          [
            getItem(selectedID),
            getLikes(selectedID, 1),
            getStockers(selectedID),
          ],
        ).then(r => {
          setItem(r[0]);
          setLikes(r[1]);
          setStockers(r[2]);
          setPage(1);
          setLoading(false);
        });
      }
    }, [selectedID]
  );

  return (
    <Segment loading={loading}>
      <Header>
        {item !== null ? item.title : ''}
      </Header>
      <Tab panes={[
        {menuItem: 'LGTM', render: () => <LikesListPane likes={likes}/>},
        {menuItem: 'ストック', render: () => <StockersListPane stockers={stockers}/>},
      ]}
           activeIndex={selectedCategory}
           onTabChange={(event, data) => handleTabChange(selectedID, data.activeIndex)}
      />
    </Segment>
  )
}

export default ResponseList;