import {Container, Header, Menu} from "semantic-ui-react";
import React from "react";

function PageHeader() {
  return (
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item>
          <Header inverted>
            Qiita Self Viewer
          </Header>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default PageHeader;