import React from 'react'
import Slider from "react-slick";
import { Divider, Header, Card, Icon, Grid, Image, List, Container, Label } from 'semantic-ui-react';
import tinkarImg from '../img/Tinkar.gif';
import rakutenImg from '../img/rakuten.gif';
import edeamsImg from '../img/edreams.gif'
import './style.css';



export default function Projects() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }


    return (
        <>
            <Divider horizontal section >
                <Header as='h2' content="Projects" subheader="Examples of my recent work (2019)">

                </Header>
            </Divider>
            <Grid container centered>
                <Slider {...settings}>
                    <div className="w-slick-card">
                        <Grid stackable columns="2"
                            padded >
                            <Grid.Column width="6">
                                <Image src={tinkarImg} href="https://escard.tk/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column  width="10">
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>EScard</Card.Header>
                                        <Card.Meta> Tinder Style  Javascript cards </Card.Meta>
                                        <Card.Description> Single Page Web App with CRUD operations </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                This app is my personal project and currently I'm still working on it. The project is a Progresive Web App (PWA) where the users can store cards and read them offline.
                                                The cards are interesting Podcasts, Blogs and Courses related to Web Development. Also the user can choose Light/Dark Mode.
                                        </Container>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content textAlign='left'>
                                        <Header as='h4'>
                                            <Icon name='users' />
                                            <Header.Content>User Story</Header.Content>
                                        </Header>
                                        <List floated="left">
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   User can Login using Google and Facebook accounts and swipe cards.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   Only registered visitors can view and create new cards.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   User can choose the style of the app (Ligh, Dark, Normal).
                                            </List.Item>
                                        </List>
                                    </Card.Content>
                                    <Card.Content>
                                        <Header as='h4'>
                                            <Icon name='code' />
                                            <Header.Content>Tech Stack</Header.Content>
                                        </Header>
                                        <Card.Description  >
                                            <Container textAlign="justified" >
                                                The Single Page Application (SPA) was developed using React for the frontend and Google Firebase for the backend. The Frontend was created using the node package for "create-react-app" and is using React Hooks, Context Api, React Router and Semantic UI. The user login is created by Firebase Authentication with Facebook OAuth API. The database is using Firestore: A real time NoSQL Database. Next steps are to add PWA functionality and to improve the UI/UX.
                                        </Container>
                                        <br/>
                                            <Label tag color="blue">React</Label>
                                            <Label tag color="orange"> Firebase </Label>
                                            <Label tag color="violet"> Google Auth API</Label>
                                            <Label tag color="yellow"> Facebook oAuth API</Label>
                                            <Label tag  color="teal"> React Context API </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Label as="a" href="https://github.com/martinrebo/escard-private">
                                            <Icon link name="github" size="big" /> See Code
                                        </Label>
                                        <Label as="a" href="https://escard.tk/" >
                                            <Icon link name="mouse pointer" size="big" /> Go to site
                                        </Label>


                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div className="w-slick-card">
                        <Grid stackable columns="2"
                            padded >
                            <Grid.Column width="6">
                                <Image src={rakutenImg} href="https://martinreboredo.com/proyectos/rakuten/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column width="10">
                                <Card  fluid color="black">
                                    <Card.Content>
                                        <Card.Header>Rakuten</Card.Header>
                                        <Card.Meta> Mockup of the Rakuten TV Web App </Card.Meta>
                                        <Card.Description> Single Page Web App using MoviesDB API </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                 This project was done in one weekend and used to apply for a job position in Rakuten TV in Barcelona. Future enhancement for this app is to add Movies recomendatios based on the local Weather and other external factors. 
                                        </Container>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content textAlign='left'>
                                        <Header as='h4'>
                                            <Icon name='users' />
                                            <Header.Content>User Story</Header.Content>
                                        </Header>
                                        <List floated="left">
                                            <List.Item floated="left">
                                               <Icon name="angle right"/> User can swipe the latest movies.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>  It is Responsive.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/> Uses MoviesDB API.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>  Uses another API (Weather) to filter movies / *Work In Progress
                                            </List.Item>
                                        </List>
                                    </Card.Content>
                                    <Card.Content>
                                        <Header as='h4'>
                                            <Icon name='code' />
                                            <Header.Content>Tech Stack</Header.Content>
                                        </Header>
                                        <Card.Description  >
                                            <Container textAlign="justified" >
                                                The Single Page Application (SPA) was developed using React for the frontend and no Backend. The Frontend was created using the node package for "create-react-app". The app is using Hooks, useState and useEffect. Also the Swipe is done by React-Slick.  
                                        </Container>
                                        <br/>
                                            <Label tag color="blue">React</Label>
                                            <Label tag color="pink"> Bootstrap 4 </Label>
                                            <Label tag color="teal" > MovieDB API </Label>
                                            <Label tag color="violet"> React Hooks API </Label>
                                            <Label tag color="yellow"> React-Slick </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Label as="a" href="https://github.com/martinrebo/React-movie-and-moodsr">
                                            <Icon link name="github" size="big" /> See Code
                                        </Label>
                                        <Label as="a" href="https://martinreboredo.com/proyectos/rakuten/" >
                                            <Icon link name="mouse pointer" size="big" /> Go to site
                                        </Label>


                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid>
                    </div>

                    <div className="w-slick-card">
                        <Grid stackable columns="2"
                            padded >
                            <Grid.Column width="6">
                                <Image src={edeamsImg} href="https://www.edreams.es/vuelta-mundo-low-cost/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column width="10">
                                <Card fluid  color="orange">
                                    <Card.Content>
                                        <Card.Header>Edreams</Card.Header>
                                        <Card.Meta> Example of my work at eDreams </Card.Meta>
                                        <Card.Description> SEO optimized Landing Page  </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                This is one example of the pages that I developed at eDreams.  Pixel perfect PSD to HTML. It has microinteractions with the user (Hover over images / Table / Icon). The search engine is situated at the bottom of the page. 
                                        </Container>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content textAlign='left'>
                                        <Header as='h4'>
                                            <Icon name='users' />
                                            <Header.Content>User Story</Header.Content>
                                        </Header>
                                        <List floated="left">
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>  SEO optimized using Travel Schema
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   It is Responsive / Mobile First.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   W3C and WCAG compliant.
                                            </List.Item>
                                        </List>
                                    </Card.Content>
                                    <Card.Content>
                                        <Header as='h4'>
                                            <Icon name='code' />
                                            <Header.Content>Tech Stack</Header.Content>
                                        </Header>
                                        <Card.Description  >
                                            <Container textAlign="justified" >
                                                This Landing page is created using HTML, CSS, Javascript.  It is specially optimized for SEO by using Rich Text, WC3 and WCAG standards. It was made pixel perfect from a PSD file.
                                                Before deployment it is tested through a QA process to measure performance by Lighthouse, ESlinter, W3C. The page is deployed using an internal CMS tool. 
                                        </Container>
                                        <br/> 
                                            <Label tag color="grey">HTML </Label>
                                            <Label tag color="olive"> CSS  </Label>
                                            <Label tag color="orange" > Javascript </Label>
                                            <Label tag color="pink"> Bootstrap 4 </Label>
                                            <Label tag color="black"> PSD to HTML </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Label as="a" href="https://www.edreams.es/vuelta-mundo-low-cost">
                                            <Icon link name="github" size="big" /> See Code
                                        </Label>
                                        <Label as="a" href="https://www.edreams.es/vuelta-mundo-low-cost/" >
                                            <Icon link name="mouse pointer" size="big" /> Go to site
                                        </Label>


                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid>
                    </div>


                </Slider>
            </Grid>

        </>
    )

}