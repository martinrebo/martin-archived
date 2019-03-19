import React from 'react';
import Slider from "react-slick";
import { Card, Icon, Image } from 'semantic-ui-react';
import odigeo from './../img/odigeo-logo.jpg';


export default function Portfolio() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <h1> Lab </h1>

            <Slider {...settings}>
                <div>
                    <Card>
                        <Image src={odigeo} />
                        <Card.Content>
                            <Card.Header>Daniel</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="/home" >
                                <Icon name='user' />
                                10 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div>
                <Card>
                        <Image src={odigeo} />
                        <Card.Content>
                            <Card.Header>Daniel</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="/home" >
                                <Icon name='user' />
                                10 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </div>
                <div>
                <Card>
                        <Image src={odigeo} />
                        <Card.Content>
                            <Card.Header>Daniel</Card.Header>
                            <Card.Meta>Joined in 2016</Card.Meta>
                            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a href="/home" >
                                <Icon name='user' />
                                10 Friends
                            </a>
                        </Card.Content>
                    </Card>
                </div>
            </Slider>


        </>
    )
}