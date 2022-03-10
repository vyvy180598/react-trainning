// Class component
import React from 'react';

type ContactUsProps = {
  email: string
}

export class ContactUs extends React.Component<ContactUsProps> {
  render() {
    return (
      <div>
        Contact Us:
        {this.props.email}
      </div>
    );
  }
}
