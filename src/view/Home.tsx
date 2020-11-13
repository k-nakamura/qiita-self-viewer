import React, {useEffect} from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import {getItems} from '../api/Items';
import ItemList from "../component/ItemList";
import PageHeader from "../component/PageHeader";
import ResponseList from "../component/ResponseList";
import {useDispatch, useSelector} from "react-redux";
import {storeItems} from "../redux/action/ItemAction";

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.item.items);

  useEffect(() => {
    getItems(1)
      .then(r => {
        dispatch(storeItems(r));
      })
  }, [dispatch]);

  return (
    <div>
      <PageHeader/>
      <Container className={"main-container"}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={9}>
              <Segment>
                投稿:&nbsp;{items.length}&nbsp;件
                <Segment attached>
                  <ItemList/>
                </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column width={7}>
              <ResponseList/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;