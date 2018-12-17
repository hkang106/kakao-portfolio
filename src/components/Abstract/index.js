import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const Abstract = () => (
	<Modal trigger={<Button>Basic Modal</Button>} basic size="small">
		<Header icon="archive" content="Abstract" />
		<Modal.Content>
			<p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
		</Modal.Content>
	</Modal>
);

export default Abstract;
