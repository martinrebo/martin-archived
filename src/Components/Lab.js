import React from 'react';
import Slider from "react-slick";
import { Grid, Card, Icon, Image, Divider, Header } from 'semantic-ui-react';
import myTaxi from './../img/mytaxi-logo.png';
import rakuten from './../img/rakuten-logo.png';
import gamelab from './../img/game-logo.png';
import oldPortfolio from './../img/old-logo.png';
import { Label } from 'semantic-ui-react'
import './style.css';
import logo from '../logo.svg';


 
export default function Portfolio() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
        
        <div > 
               <Divider horizontal section >
      <Header as='h2' content="Lab" subheader="Non commercial projects  ">
      </Header>
    </Divider>
    </div>
    <br/>  <br/>
    <Grid container centered> 
   
            <div>
                <Slider {...settings}>
                    <div className="w-slick-card"> 
                       
                        <Card centered color="black">
                            <Image src={gamelab} size="small" centered />
                            <Card.Content>
                                <Card.Header>Game Lab 33 </Card.Header>
                                <Card.Meta>Personal Project</Card.Meta>
                                <Card.Description>Space for experimentation.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        React 
                                    </Label>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        bit.dev
                                     </Label>
                                </div>
                            </Card.Content>
                            <Card.Content extra>
                            
                                <a href="http://game-lab-33.s3-website.eu-west-3.amazonaws.com/" target="_blank"  rel="noopener noreferrer">
                                    <Icon name='mouse pointer' />
                                    Go to Site
                            </a>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="w-slick-card">
                   
                        <Card centered color="black">
                            <Image src={myTaxi} size="small" centered />
                            <Card.Content>
                                <Card.Header> My Taxi </Card.Header>
                                <Card.Meta>Job Application</Card.Meta>
                                <Card.Description> Proposal of new UX/UI for myTaxi.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        React 
                                    </Label>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        Material UI
                                     </Label>
                                </div>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="http://react-free-now.s3-website.eu-west-3.amazonaws.com/"   target="_blank" rel="noopener noreferrer">
                                    <Icon name='mouse pointer' />
                                    Go to site
                            </a>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="w-slick-card">
                
                        <Card centered color="black">
                            <Image src={rakuten} size="small" centered />
                            <Card.Content>
                                <Card.Header>Rakuten TV </Card.Header>
                                <Card.Meta>Job Application</Card.Meta>
                                <Card.Description> Mock up of the Rakuten TV website.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        React 
                                    </Label>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                       Bootstrap
                                     </Label>
                                </div>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://martinreboredo.com/portfolio/proyectos/rakuten/" target="_blank"  rel="noopener noreferrer">
                                    <Icon name='mouse pointer' />
                                    Go to site
                            </a>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="w-slick-card">
                   
                        <Card centered color="black">
                            <Image src={logo} size="tiny" centered />
                            <Card.Content>
                                <Card.Header>React Dress </Card.Header>
                                <Card.Meta>Personal Project</Card.Meta>
                                <Card.Description> my First React Application </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                        React 
                                    </Label>
                                    <Label as='a' image>
                                        <img src={logo} alt="" />
                                       Bootstrap
                                     </Label>
                                </div>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://martinreboredo.com/proyectos/reactdress/" target="_blank" rel="noopener noreferrer" >
                                    <Icon name='mouse pointer' />
                                    Go to site
                            </a>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="w-slick-card">
                  
                        <Card centered color="black">
                            <Image src={oldPortfolio} size="small" centered />
                            <Card.Content>
                                <Card.Header>Old Portfolio </Card.Header>
                                <Card.Meta>Personal Project</Card.Meta>
                                <Card.Description> My old portfolio with more projects.</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <div>
                                    <Label as='a' image>
                                        <Icon name="html5"/>
                                        HTML, CSS , JS
                                    </Label>

                                </div>
                            </Card.Content>
                            <Card.Content extra>
                                <a href="https://martinreboredo.com/proyectos/oldfiles/index2.html" target="_blank" rel="noopener noreferrer" >
                                    <Icon name='mouse pointer' />
                                    Go to site
                            </a>
                            </Card.Content>
                        </Card>
                    </div>

                </Slider>

            </div>
            </Grid>
            <br/>
            <Divider section clearing />
        </>
    )
}