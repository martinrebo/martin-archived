import React from 'react';
import {Divider, Header, Card, Icon, Grid, Image } from 'semantic-ui-react';
import OdigeoLogo from './../img/odigeo-logo.jpg';
import playbusiness from './../img/play-logo.png';
import aguafy from './../img/aguafy-logo.png';
import exclusivas from './../img/faro-logo.png';
import bicos from './../img/bicos-logo.png';
import info from './../img/info-logo.png';


function Work() {
    return (
        <>
               <Divider horizontal section >
      <Header as='h2' content="Experience" subheader="More info at  Linkedin">

      </Header>
    </Divider>
    <br/>  <br/>
            <Grid container doubling stackable>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card centered color="blue">
                            <Image src={OdigeoLogo} size="small" centered  />
                            <Card.Content>
                                <Card.Header>Online Travel Agency</Card.Header>
                                <Card.Meta>
                                    <span className='date'>SEO Webmaster</span>
                                </Card.Meta>
                                <Card.Description>Develop SEO Webpages </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://www.edreamsodigeo.com/" target="_blank" rel="noreferrer noopener">
                                    <Icon name='mouse pointer' />
                                   Go to Site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered color="green">
                            <Image src={playbusiness}  size="small" centered />
                            <Card.Content>
                                <Card.Header> Crowdfunding </Card.Header>
                                <Card.Meta>
                                    <span className='date'>Marketing Manager</span>
                                </Card.Meta>
                                <Card.Description>Create Marketing Campaings for Startups </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://playbusiness.mx/" target="_blank" rel="noreferrer noopener">
                                    <Icon name='mouse pointer' />
                                    Go to Site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered color="teal">
                            <Image src={aguafy} size="small" centered />
                            <Card.Content>
                                <Card.Header>Water Distribution </Card.Header>
                                <Card.Meta>
                                    <span className='date'>Web Developer</span>
                                </Card.Meta>
                                <Card.Description>Develop ecommerce platform </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://aguafy.com/" target="_blank" rel="noreferrer noopener" >
                                    <Icon name='mouse pointer' />
                                    Go to site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card centered color="orange">
                            <Image src={exclusivas} size="small" centered />
                            <Card.Content>
                                <Card.Header>Logistics</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Web Developer</span>
                                </Card.Meta>
                                <Card.Description>Develop Web and Internal Tools</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://exclusivasfaro.com/" target="_blank" rel="noreferrer noopener">
                                    <Icon name='mouse pointer' />
                                    Go to site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered color="olive">
                            <Image src={bicos} size="small" centered />
                            <Card.Content>
                                <Card.Header>Restaurant</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Web Developer</span>
                                </Card.Meta>
                                <Card.Description>Develop the website</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://www.bicosrestaurante.com/" target="_blank" rel="noreferrer noopener">
                                    <Icon name='mouse pointer'  />
                                    Go to site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered color="black">
                            <Image src={info} size="small" centered />
                            <Card.Content>
                                <Card.Header>Marketing Agency</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Founder</span>
                                </Card.Meta>
                                <Card.Description> Marketing Campaings for music events </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://www.facebook.com/InfopartyLdn/" target="_blank" rel="noreferrer noopener">
                                    <Icon name='mouse pointer' />
                                    Go to site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </>
    )
}

export default Work;