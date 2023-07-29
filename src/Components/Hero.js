import React from 'react';
import { Grid, Divider, Header, Icon, Label } from 'semantic-ui-react'


function Hero() {

    return (

        <section>
            <Grid centered verticalAlign='middle' stackable columns="2" className="hero" >
                <Grid.Column container doubling >


                    <div className="hero-content">
                        <Header as='h1' floated='left'>
                            Martin Reboredo
    </Header>
                        <Divider clearing />
                        <Header as='h2' floated='left' color="grey">
                            Fullstack Web Developer (MERN)
    </Header>
                        <Divider hidden clearing fitted />
                        <Header as='h5' floated='left' color="grey">
                            +5 years dev experience | Barcelona | 
    </Header>
                        <Divider clearing hidden fitted />
                        <Header as='h3' floated='left' color="teal">
                            |  MongoDB  | Express | React | Node |
    </Header>
                        <Divider hidden clearing fitted />
                        <Header as='h4' floated='left' color="orange">
                            |  HTML - JSX  |  CSS - SASS  |  JS - ES6  |
    </Header>

                        <Divider clearing hidden fitted />
                        <Header as='h5' floated='left' color="olive">
                            |  GIT  | JIRA | AGILE | UX / UI  | SEO |
    </Header>
                        <Divider clearing hidden fitted />

                        <a href=" https://www.linkedin.com/in/martin-reboredo-garcia/" target="_blank" title="Linkedin"> <Icon link name="linkedin alternate" size="big" /> </a>

                     
                        <a href="https://github.com/martinrebo" target="_blank"  title="Github"> <Icon link name="github" size='big' /> </a>
                        <a href="https://martinreboredo.com/blog/" target="_blank" title="Blog"> <Icon link name="blogger" size='big' /> </a>
                        <Divider clearing />
                        <Label>
                            <Icon name="mail" /> hello@martinreboredo.com
    </Label>

                    </div>

                </Grid.Column>
            </Grid>

        </section>
    )
}

export default Hero;
