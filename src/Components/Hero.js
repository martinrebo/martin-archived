import React from 'react';
import { Grid, Divider, Header, Icon, Label } from 'semantic-ui-react'


function Hero() {

    return (

        <section>
            <Grid centered verticalAlign='middle' stackable columns="2" className="hero" >
                <Grid.Column container doubling >


                    <div className="hero-content">
                        <Header as='h2' floated='left' color="grey">
                            Martin Reboredo
                        </Header>
                        <Divider clearing />
                        <Header as='h5' floated='left' color="grey">
                            +8 years DEV experience | Freelance & full-time | Remote work
                        </Header>
                        <Header as='h5' floated='left' color="grey">
                            Startup & Corporate | App Scalabilty | Mobile & Web |
                        </Header>
                        <Divider hidden clearing fitted />
                        <Header as='h1' floated='left' >
                            Fullstack Developer (MERN)
                        </Header>
                        <Divider clearing hidden fitted />
                        <Header as='h3' floated='left' color="teal" >
                            |  MongoDB  | Express | React Native | Node |
                        </Header>
                        <Divider hidden clearing fitted />
                        <Header as='h4' floated='left' color="orange">
                            | Amazon Web Services | Google Cloud Platform | GIT | JIRA |
                        </Header>

                        <Divider clearing hidden fitted />
                        <Header as='h5' floated='left' color="olive">
                            | AGILE | UX / UI | SEO | SEM |
                        </Header>
                        <Divider clearing hidden fitted />

                        <a href="https://www.linkedin.com/in/martin-reboredo-garcia/" target="_blank" rel="noopener noreferrer" title="Linkedin"> <Icon link name="linkedin alternate" size="big" /> </a>


                        <a href="https://github.com/warteamx" target="_blank" rel="noopener noreferrer" title="Github"> <Icon link name="github" size='big' /> </a>
                        <a href="https://martinreboredo.com/blog/" target="_blank"  rel="noopener noreferrer" title="Blog"> <Icon link name="blogger" size='big' /> </a>
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
