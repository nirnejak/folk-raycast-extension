import { ActionPanel, Detail, List, Action } from "@raycast/api";

const OrganizationList = () => {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Los Pollos Hermanos"
        actions={
          <ActionPanel>
            <Action.Push title="Organizations" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Los Pollos Hermanos"
        actions={
          <ActionPanel>
            <Action.Push title="Organizations" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Los Pollos Hermanos"
        actions={
          <ActionPanel>
            <Action.Push title="Organizations" target={<Detail markdown="# Hey! 👋" />} />
          </ActionPanel>
        }
      />
    </List>
  );
};

export default OrganizationList;
