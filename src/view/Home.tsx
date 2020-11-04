import React, {useEffect, useState} from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import {getItems} from '../api/Items';
import ItemList from "../component/ItemList";
import Item from "../dto/Item";
import PageHeader from "../component/PageHeader";

function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [id, setID] = useState<string>('');

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
            <Grid.Column width={10}>
              <Segment>
                投稿:&nbsp;{items.length}&nbsp;件
                <Segment>
                  <ItemList items={items} setID={setID}/>
                </Segment>
              </Segment>
            </Grid.Column>
            <Grid.Column width={6}>
              <Segment>

              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default Home;