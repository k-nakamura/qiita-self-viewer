import React, {useEffect, useState} from 'react';
import {Container, Grid, Segment} from "semantic-ui-react";
import {getItems, PER_PAGE} from '../api/Items';
import ItemList from "../component/ItemList";
import {Item} from "../types/Item";
import PageHeader from "../component/PageHeader";
import ResponseList from "../component/ResponseList";

function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);
  const [disabledMore, setDisabledMore] = useState<boolean>(false);

  useEffect(() => readMore(), []);

  const readMore = () => {
    setDisabledMore(true);
    getItems(page + 1)
      .then(r => {
        setItems([...items, ...r]);
        if (r.length !== PER_PAGE) {
          setHasMore(false);
        }
        setPage(page + 1);
        setDisabledMore(false);
      })
  }

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
                  <ItemList items={items}/>
                </Segment>
                {hasMore
                  ? <Segment textAlign={'center'}
                             attached
                             secondary
                             content={'Read More'}
                             disabled={disabledMore}
                             onClick={readMore}
                  />
                  : ''}
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