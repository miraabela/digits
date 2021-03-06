import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import { Contacts } from '/imports/api/contact/contact';

/** Renders a single row in the List Stuff table. See pages/ListContacts.jsx. */
class ContactAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick() {
    if (confirm('Do you really want to delete this contact??')) {
      Contacts.remove(this.props.contact._id, this.deleteCallBack);
    }
  }

  deleteCallBack(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete Contact failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete Contact succeeded' });
      this.formRef.reset();
    }
  }

  render() {
    return (
        <Card>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.contact.image} />
            <Card.Header>{this.props.contact.firstName} {this.props.contact.lastName}</Card.Header>
            <Card.Meta>{this.props.contact.address}</Card.Meta>
            <Card.Description>{this.props.contact.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.contact.owner}
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.contact._id}`}>Edit</Link>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={this.onClick}>Delete</Button>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ContactAdmin.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ContactAdmin);
