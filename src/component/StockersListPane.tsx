import React, {useState} from "react";
import {Button, List, Tab} from "semantic-ui-react";
import UserListItem from "./UserListItem";
import {User} from "../types/qiita-types";
import {getStockers} from "../api/Stockers";
import {useDispatch, useSelector} from "react-redux";
import {addStoredStockers} from "../redux/action/StockerAction";

function StockersListPane() {
  const [disabledMore, setDisabledMore] = useState<boolean>(false);

  const id = useSelector(state => state.select.id);
  const page = useSelector(state => state.stocker.page);
  const hasMore = useSelector(state => state.stocker.hasMore);
  const stockers = useSelector(state => state.stocker.stockers);

  const dispatch = useDispatch();

  const readMore = () => {
    setDisabledMore(true);
    getStockers(id, page + 1)
      .then(r => {
        dispatch(addStoredStockers(
          stockers,
          r,
        ));
        setDisabledMore(false);
      })
  }

  return (
    <Tab.Pane>
      <List verticalAlign={'middle'} divided className={'separated'}>
        {
          stockers.map((st: User) => <UserListItem user={st} key={`stock_${st.id}`}/>)
        }
      </List>
      {hasMore
        ? <Button icon={'reload'}
                  color={'grey'}
                  onClick={readMore}
                  fluid
                  disabled={disabledMore}
                  content={'More'}/>
        : ''}
    </Tab.Pane>
  )
}

export default StockersListPane;