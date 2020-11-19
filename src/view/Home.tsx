import React, {useEffect} from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import ItemList from "../component/ItemList";
import PageHeader from "../component/PageHeader";
import ResponseList from "../component/ResponseList";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../api/User";
import {storeUser} from "../redux/action/UserAction";

function Home() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  useEffect(() => {
    getUser()
      .then(r => {
        dispatch(storeUser(r));
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
                投稿:&nbsp;{user?.items_count}&nbsp;件
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