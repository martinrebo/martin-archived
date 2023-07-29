import React from 'react'
import Slider from "react-slick";
import { Divider, Header, Card, Icon, Grid, Image, List, Container, Label } from 'semantic-ui-react';
import tinkarImg from '../img/Tinkar.gif';
import rakutenImg from '../img/rakuten.gif';
import edeamsImg from '../img/edreams.gif';
import opodoImg from '../img/opodo.gif';
import datepanImg from '../img/datepan.gif'
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
                <Header as='h2' content="Projects" subheader="Examples of my recent work (2020)">

                </Header>
            </Divider>
            <Grid container centered>
                <Slider {...settings}>
                <div className="w-slick-card">
                        <Grid stackable columns="2"
                            padded >
                            <Grid.Column width="6">
                                <Image src={datepanImg} href="https://datepan.com/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column  width="10">
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>DatePan (2020) </Card.Header>
                                        <Card.Meta> Meet people in the real world. Swipe dates, not persons </Card.Meta>
                                        <Card.Description> Single Page Web App (SPA) with CRUD operations </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                This Web app is my current project. This is a Progresive Web App (PWA) where the users can swipe, create, join events and chat.                                                
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
                                            <Icon name="angle right"/>   User can create events based on paramenters (Day, Activities, ... ).
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   Only registered visitors can view and create new dates.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   User can filter dates on several parametres (Location, Relationship, ...).
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
                                                The Single Page Application (SPA) was developed using the MERN Stack and deployed on the Google Cloud App Engine. It is using Material UI. The codebase is kept on a Github private repository. 
                                                The database is using MongoDB Atlas. The chat service is using Socket.io
                                        </Container>
                                        <br/>
                                            <Label tag color="blue">MongoDB</Label>
                                            <Label tag color="orange"> Express </Label>
                                            <Label tag color="violet"> React</Label>
                                            <Label tag color="yellow"> Node </Label>
                                            <Label tag  color="teal"> Google Cloud </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Label as="a" href="https://datepan.com/" target="_blank" >
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
                                <Image src={tinkarImg} href="https://tinkar-tk.web.app/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column  width="10">
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>EScard (2019) </Card.Header>
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
                                        <Label as="a" href="https://github.com/martinrebo/escard-private" target="_blank">
                                            <Icon link name="github" size="big" /> See Code
                                        </Label>
                                        <Label as="a" href="https://tinkar-tk.web.app/" target="_blank">
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
                                <Image src={opodoImg} href="https://www.opodo.co.uk/best-time-to-book-flights/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column  width="10">
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>Opodo - Best Time To Book (2019) </Card.Header>
                                        <Card.Meta> Landing Page for Odpodo </Card.Meta>
                                        <Card.Description> Uses Google Chart API + Structured Data </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                This PR campaing is launched anually in Opodo, showing the best prices to book a flight, based the Odigeo Data. The campaing is launched in 4 different markets/countries. 
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
                                            <Icon name="angle right"/>   User can interact with the graphs to see the best price.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   User can see best price by country and month.
                                            </List.Item>
                                            <List.Item floated="left">
                                            <Icon name="angle right"/>   When user search in google appears FAQ structured data.
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
                                                The Landing page was developed using Google Charts API and Structured Data. It uses propietary CSS libraries and Boostrap CSS. jQuery is used to adapt the size of the graphs when the browser window is resized. Page is W3C compliant and the QA involves Google Page Speed and Rich Text Snippet tool. 
                                        </Container>
                                        <br/>
                                            <Label tag color="blue">HTML, CSS, JS</Label>
                                            <Label tag color="yellow"> jQuery </Label>
                                            <Label tag color="orange"> Google Charts API </Label>
                                            <Label tag color="violet"> UX / UI </Label>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>

                                        <Label as="a" href="https://www.opodo.co.uk/best-time-to-book-flights/" >
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
                                        <Card.Header>Rakuten (2018) </Card.Header>
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
                                            <Label tag color="violet"> React Hooks </Label>
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
                                        <Card.Header>Edreams (2018) </Card.Header>
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