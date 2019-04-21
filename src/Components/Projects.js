import React from 'react'
import Slider from "react-slick";
import { Divider, Header, Card, Icon, Grid, Image, List, Container, Label } from 'semantic-ui-react';
import tinkarImg from '../img/Tinkar.gif';
import rakutenImg from '../img/rakuten.gif';
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
                                <Image src={tinkarImg} href="https://tinkar.tk/" target='_blank' size="medium" alt="" />
                            </Grid.Column>
                            <Grid.Column width="10">
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>Tinkar</Card.Header>
                                        <Card.Meta> A Tinder Style web app for reading cards </Card.Meta>
                                        <Card.Description> Single Page Web App with CRUD operations </Card.Description>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description>
                                            <Container textAlign="justified">
                                                This app is my personal project and currently I'm still working on it. The idea is to have a Progresive Web App (PWA) where the users can store cards and read them offline.
                                                There are 3 main types of cards: Business, Tech and Health.
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
                                                User can Login using Google and Facebook accounts and swipe cards.
                                            </List.Item>
                                            <List.Item floated="left">
                                                Only registered visitors can create new card.
                                            </List.Item>
                                            <List.Item floated="left">
                                                User can choose the style of the app (Ligh, Dark, Normal).
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
                                                The Single Page Application (SPA) was developed using React for the frontend and Google Firebase for the backend. The Frontend was created using the node package for "create-react-app". The the Users login is using Firebase Authentication with Facebook OAuth API. The database is using Firestore: A real time NoSQL Database. Next steps are to add PWA functionality and toimprove the UI/UX.
                                        </Container>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Label as="a" href="https://github.com/martinrebo/tinkar" href>
                                        <Icon   link name="github" size="big" /> See Code
                                        </Label>
                                        <Label as="a" href="https://tinkar.tk/" >
                                        <Icon link name="mouse pointer" size="big" /> Go to site
                                        </Label>
                                       
                                       
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid>
                    </div>
                    <div className="w-slick-card">
                        <Grid stackable columns="2"
                            padded>
                            <Grid.Column>
                                <Image src={tinkarImg} href="https://tinkar.tk/" target='_blank' size="small" alt="" />
                            </Grid.Column>
                            <Grid.Column>
                                <Card fluid color="blue">
                                    <Card.Content>
                                        <Card.Header>Tinkar</Card.Header>

                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Description> Single Page Web App with CRUD </Card.Description>
                                        <Card.Description> A Tinder Style web app for reading cards </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <List>

                                        </List>
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