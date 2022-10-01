import { ActionPanel, Detail, List, Action } from "@raycast/api";

import { organizations, contacts } from "../data";
import type { OrganizationType } from "../data";

import ContactList from "./ContactList";

const OrganizationActions: React.FC<{ organization: OrganizationType }> = ({ organization }) => {
  return (
    <ActionPanel>
      <Action.Push title="Show Organization" target={<Detail markdown={`${organization.name}`} />} />
      <Action.Push title="List Members" target={<ContactList contacts={contacts} />} />
    </ActionPanel>
  );
};

const OrganizationList = () => {
  return (
    <List>
      {organizations.map((organization) => (
        <List.Item
          key={organization.id}
          icon="logo.svg"
          title={organization.name}
          subtitle={`${organization.members} Members`}
          actions={<OrganizationActions organization={organization} />}
        />
      ))}
    </List>
  );
};

export default OrganizationList;
