import { ActionPanel, List, Action } from "@raycast/api";

import { contacts } from "./data";

import SearchResults from "./components/SearchResults";
import ContactList from "./components/ContactList";
import GroupList from "./components/GroupList";
import OrganizationList from "./components/OrganizationList";

export default function Command() {
  return (
    <List>
      <List.Item
        icon="logo.svg"
        title="Search"
        actions={
          <ActionPanel>
            <Action.Push title="Search" target={<SearchResults />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="logo.svg"
        title="Add Contact"
        actions={
          <ActionPanel>
            <Action.Push title="Search" target={<SearchResults />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="logo.svg"
        title="Contacts"
        actions={
          <ActionPanel>
            <Action.Push title="List Contacts" target={<ContactList contacts={contacts} />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="logo.svg"
        title="Groups"
        actions={
          <ActionPanel>
            <Action.Push title="List Groups" target={<GroupList />} />
          </ActionPanel>
        }
      />
      <List.Item
        icon="logo.svg"
        title="Organizations"
        actions={
          <ActionPanel>
            <Action.Push title="List Organizations" target={<OrganizationList />} />
          </ActionPanel>
        }
      />
    </List>
  );
}
