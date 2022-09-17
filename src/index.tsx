import { ActionPanel, List, Action } from "@raycast/api";

import ContactList from "./components/ContactList";
import GroupList from "./components/GroupList";
import SearchResults from "./components/SearchResults";
import OrganizationList from "./components/SearchResults";

export default function Command() {
  return (
    <List>
      <List.Item
        icon="list-icon.png"
        title="Search"
        actions={
          <ActionPanel>
            <Action.Push title="Search Contacts and Groups" target={<SearchResults />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Contacts"
        actions={
          <ActionPanel>
            <Action.Push title="List Contacts" target={<ContactList />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Organizations"
        actions={
          <ActionPanel>
            <Action.Push title="List Organizations" target={<GroupList />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="list-icon.png"
        title="Groups"
        actions={
          <ActionPanel>
            <Action.Push title="List Groups" target={<OrganizationList />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
