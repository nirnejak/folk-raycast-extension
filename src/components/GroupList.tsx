import { ActionPanel, List, Action } from "@raycast/api";

import { contacts, groups } from "../data";

import ContactList from "./ContactList";

const GroupList = () => {
  return (
    <List>
      {groups.map((group) => (
        <List.Item
          icon="list-icon.png"
          key={group.id}
          title={group.name}
          actions={
            <ActionPanel>
              <Action.Push
                title="Show Contacts"
                target={<ContactList contacts={contacts.filter((contact) => contact.group === group.id)} />}
              />
            </ActionPanel>
          }
          subtitle={`${group.members} Members`}
        />
      ))}
    </List>
  );
};

export default GroupList;
