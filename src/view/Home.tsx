import React, {useState} from 'react';
import {Button, Card, Icon} from "semantic-ui-react";

function Home() {
  const [count, setCount] = useState(0);
  const handlePlus = () => setCount(count + 1);
  const handleMinus = () => setCount(count - 1);

  return (
    <div>
      This is Home.
      <Card>
        <Card.Header textAlign={"left"}>
          Count
        </Card.Header>
        <Card.Meta textAlign={"left"}>
          count up/down
        </Card.Meta>
        <Card.Content>
          <Card.Description>
            <Button.Group>
              <Button icon onClick={handlePlus}>
                <Icon name={'plus'}/>
              </Button>
              <Button.Or text={count}/>
              <Button icon onClick={handleMinus}>
                <Icon name={'minus'}/>
              </Button>
            </Button.Group>
          </Card.Description>
          <Card.Description>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

export default Home;