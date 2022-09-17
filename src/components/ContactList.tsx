import { ActionPanel, Detail, List, Action } from "@raycast/api";

const ContactList = () => {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Walter White"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Jessee Pinkman"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Saul Goodman"
        actions={
          <ActionPanel>
            <Action.Push title="Show Details" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
    </List>
  );
};

export default ContactList;
