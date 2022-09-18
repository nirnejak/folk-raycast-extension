import { ActionPanel, Detail, List, Action } from "@raycast/api";

import type { ContactType } from "../data";

const ContactActions: React.FC<{ contact: ContactType }> = ({ contact }) => (
  <ActionPanel>
    <Action.Push title="Show Details" target={<Detail markdown={`# Hey ${contact.name}\n ${contact.email}! 👋`} />} />
    <Action.Push title="Email Contact" target={<Detail markdown={`# Email ${contact.email}! 📨`} />} />
    <Action.Push title="Add to Group" target={<Detail markdown={`# Add to Group `} />} />
    <Action.Push title="Create Reminder" target={<Detail markdown={`# Create Reminder ⏰`} />} />
  </ActionPanel>
);

type Props = {
  contacts: ContactType[];
};

const ContactList: React.FC<Props> = ({ contacts }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <List.Item icon="list-icon.png" title={contact.name} actions={<ContactActions contact={contact} />} />
      ))}
    </List>
  );
};

export default ContactList;
