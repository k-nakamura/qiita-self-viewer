import React, {useEffect, useState} from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import {getItems} from '../api/Items';
import ItemList from "../component/ItemList";
import {Item} from "../types/Item";
import PageHeader from "../component/PageHeader";
import ResponseList from "../component/ResponseList";

function Home() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
      getItems()
        .then(r => setItems(r));
    }, []
  )

  return (
    <div>
      <PageHeader/>
      <Container className={"main-container"}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={9}>
              <Segment>
                投稿:&nbsp;{items.length}&nbsp;件
                <Segment>
                  <ItemList items={items}/>
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