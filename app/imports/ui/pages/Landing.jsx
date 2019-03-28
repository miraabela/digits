import React from 'react';
import { Grid, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className = 'landingbg'>
        <Grid verticalAlign='middle' textAlign='center' columns = {3} container>

          <Grid.Column>
            <Icon inverted size = 'massive' name='users'/>
            <Header as='h1' inverted>Multiple Users</Header>
            <Header as='h3' inverted>This address book enables any number of users to register
              and save their business contacts. You can only see the contacts you have created.</Header>
          </Grid.Column>

          <Grid.Column>
            <Icon inverted size = 'massive' name='file alternate'/>
            <Header as='h1' inverted>Contact Details</Header>
            <Header as='h3' inverted>For each contact, you can save their name, address, and phone number.</Header>
          </Grid.Column>

          <Grid.Column>
            <Icon inverted size = 'massive' name='calendar check outline'/>
            <Header as='h1' inverted>Timestamped Notes</Header>
            <Header as='h3' inverted>Each time you make a contact with digits, you can write a note that
              summarizes the conversation. This is a note saved along with a timestamp with the contact.</Header>
          </Grid.Column>

        </Grid>
        </div>
    );
  }
}

export default Landing;
