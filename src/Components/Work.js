import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';
import OdigeoLogo from './../img/odigeo-logo.jpg';
import playbusiness from './../img/play-logo.png';


function Work() {
    return(
<>
<Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
      <Card>
    <Image src={OdigeoLogo} />
    <Card.Content>
      <Card.Header>Odigeo</Card.Header>
      <Card.Meta>
        <span className='date'>SEO Webmaster</span>
      </Card.Meta>
      <Card.Description>Develop Webpages for Content Campaings</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='code' />
        See the pages I built
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column>
      <Card>
    <Image src={playbusiness} />
    <Card.Content>
      <Card.Header>Odigeo</Card.Header>
      <Card.Meta>
        <span className='date'>SEO Webmaster</span>
      </Card.Meta>
      <Card.Description>Develop Webpages for Content Campaings</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='code' />
        See the pages I built
      </a>
    </Card.Content>
  </Card>
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={4}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={5}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
</>
    )
}

export default Work;