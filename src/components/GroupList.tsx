import { ActionPanel, Detail, List, Action } from "@raycast/api";

const ContactList = () => {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Drug Dealers"
        actions={
          <ActionPanel>
            <Action.Push title="Show Contacts" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Movers"
        actions={
          <ActionPanel>
            <Action.Push title="Show Contacts" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Pick Pockets"
        actions={
          <ActionPanel>
            <Action.Push title="Show Contacts" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
    </List>
  );
};

export default ContactList;
