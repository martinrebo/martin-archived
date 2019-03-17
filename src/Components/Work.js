import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';
import OdigeoLogo from './../img/odigeo-logo.jpg';
import playbusiness from './../img/play-logo.png';
import aguafy from './../img/aguafy-logo.png';
import exclusivas from './../img/faro-logo.png';
import bicos from './../img/bicos-logo.jpg';
import info from './../img/info-logo.png';


function Work() {
    return (
        <>
        <h1> Work Experience </h1>
            <Grid container doubling stackable>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card centered>
                            <Image src={OdigeoLogo}  />
                            <Card.Content>
                                <Card.Header>Online Travel Agency</Card.Header>
                                <Card.Meta>
                                    <span className='date'>SEO Webmaster</span>
                                </Card.Meta>
                                <Card.Description>Develop Webpages for Content Campaings</Card.Description>
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
                        <Card centered>
                            <Image src={playbusiness}  />
                            <Card.Content>
                                <Card.Header>Company Builder & Crowdfunding </Card.Header>
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
                        <Card centered>
                            <Image src={aguafy}  />
                            <Card.Content>
                                <Card.Header>Water Distribution </Card.Header>
                                <Card.Meta>
                                    <span className='date'>Web Developer</span>
                                </Card.Meta>
                                <Card.Description>Design and Develop the ecommerce platform </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://aguafy.com/" target="_blank" rel="noreferrer noopener" >
                                    <Icon name='mouse pointer' />
                                    Go to shop
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card centered>
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
                        <Card centered>
                            <Image src={bicos} size="small" centered />
                            <Card.Content>
                                <Card.Header>Restaurant</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Web Developer</span>
                                </Card.Meta>
                                <Card.Description>Develop the website</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
                                    <Icon name='mouse pointer'  />
                                    Go to site
      </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Image src={info} size="small" centered />
                            <Card.Content>
                                <Card.Header>Info Party London</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Founder</span>
                                </Card.Meta>
                                <Card.Description> PR and Promotion Agency</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a>
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