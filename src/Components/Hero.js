import React from 'react';
import {Grid, Divider, Header, Icon } from 'semantic-ui-react'




function Hero() {

    return (

        <section>
        <Grid centered verticalAlign='middle' columns={2}  className="hero" > 
        <Grid.Row> 
            <Grid.Column>
            <div className="hero-content">
            

                <Header as='h1' floated='left'>
                    Web Developer
    </Header>
                <Divider clearing  />
                <Header as='h2' floated='left' color="grey">
                    Martin Reboredo
    </Header>
    <Divider clearing hidden fitted />
   
    <a href=" https://www.linkedin.com/in/martin-reboredo-garcia/" target="_blank" rel="noopener noreferrer"> <Icon link name="linkedin alternate" size='large' /> </a>
    
    <a href="https://github.com/martinrebo" target="_blank" rel="noopener noreferrer"> <Icon link name="github" size='large' /> </a>
    <a href="https://martinreboredo.com/blog/" target="_blank" rel="noopener noreferrer"> <Icon link name="blogger" size='large' /> </a>
    
            </div>
            <Grid.Column>
                
            </Grid.Column>
            </Grid.Column>
            </Grid.Row>
            </Grid>

        </section>
    )
}

export default Hero;
