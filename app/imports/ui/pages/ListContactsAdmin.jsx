import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Card, Header, Loader } from 'semantic-ui-react';
import { Contacts } from '/imports/api/contact/contact';
import ContactAdmin from '/imports/ui/components/ContactAdmin';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class ListContactsAdmin extends React.Component {


  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header inverted as="h2" textAlign="center">List Contacts</Header>
          <Card.Group>
            {this.props.contacts.map((contact, index) => {
              return (<ContactAdmin contact={contact} key={index}/>);
            })};
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListContactsAdmin.propTypes = {
  contacts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('ContactsAdmin');
  return {
    contacts: Contacts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListContactsAdmin);
