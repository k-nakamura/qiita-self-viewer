import React, {useEffect, useState} from "react";
import {Header, Segment, Tab} from "semantic-ui-react";
import {getItem} from "../api/Items";
import {getLikes} from "../api/Likes";
import {getStockers} from "../api/Stockers";
import LikesListPane from "./LikesListPane";
import StockersListPane from "./StockersListPane";
import {useDispatch, useSelector} from "react-redux";
import {selectItem} from "../redux/action/SelectAction";
import {storeItem} from "../redux/action/ItemAction";
import {storeStockers} from "../redux/action/StockerAction";

function ResponseList() {
  const [loading, setLoading] = useState<boolean>(false);

  const {id, category} = useSelector(state => state.select);
  const item = useSelector(state => state.item.selected.item);

  const dispatch = useDispatch();

  const handleTabChange = (id: string, afterCategory: string | number | undefined) => {
    switch (typeof afterCategory) {
      case "string":
        dispatch(selectItem(id, afterCategory))
        break;
      case "number":
        dispatch(selectItem(id, afterCategory.toString()))
        break;
      default:
        break;
    }
  };

  useEffect(() => {
      if (id !== '') {
        setLoading(true);
        Promise.all(
          [
            getItem(id),
            getLikes(id),
            getStockers(id, 1),
          ],
        ).then(r => {
          dispatch(storeItem(r[0], r[1],));
          dispatch(storeStockers(r[2]));
          setLoading(false);
        });
      }
    }, [id, dispatch]
  );

  return (
    <Segment loading={loading}>
      <Header>
        {item !== null ? item.title : ''}
      </Header>
      <Tab panes={[
        {menuItem: 'LGTM', render: () => <LikesListPane/>},
        {menuItem: 'ストック', render: () => <StockersListPane/>},
      ]}
           activeIndex={category}
           onTabChange={(event, data) =>
             handleTabChange(id, data.activeIndex)}
      />
    </Segment>
  )
}

export default ResponseList;