export type ContactType = {
  id: number;
  name: string;
  email: string;
  group: number;
};

export const contacts: ContactType[] = [
  {
    id: 1,
    name: "Walter White",
    email: "walter.white@hotmail.com",
    group: 1,
  },
  {
    id: 2,
    name: "Jesse Pinkman",
    email: "jessee.pinkman@hotmail.com",
    group: 1,
  },
  {
    id: 3,
    name: "Saul Goodman",
    email: "saul.goodman@gmail.com",
    group: 4,
  },
  {
    id: 4,
    name: "Gustavo Fring",
    email: "gustavo.fring@hotmai.com",
    group: 2,
  },
  {
    id: 5,
    name: "Gale Boetticher",
    email: "gale.boetticher@hotmai.com",
    group: 1,
  },
  {
    id: 6,
    name: "Huey",
    email: "huey@gmail.com",
    group: 3,
  },
  {
    id: 7,
    name: "Mike Ehrmantraut",
    email: "mike.ehrmantraut@gmail.com",
    group: 3,
  },
  {
    id: 8,
    name: "Tuco Salamanca",
    email: "tuco.salamanca@hotmai.com",
    group: 2,
  },
  {
    id: 9,
    name: "Hector Salamanca",
    email: "hector.salamanca@hotmai.com",
    group: 2,
  },
];

export type GroupType = {
  id: number;
  name: string;
  members: number;
};

export const groups: GroupType[] = [
  {
    id: 1,
    name: "Cooks",
    members: 3,
  },
  {
    id: 2,
    name: "Distributors",
    members: 3,
  },
  {
    id: 3,
    name: "Security",
    members: 2,
  },
  {
    id: 4,
    name: "Lawyers",
    members: 1,
  },
];

export type OrganizationType = {
  id: number;
  name: string;
  members: number;
};

export const organizations = [
  {
    id: 1,
    name: "Los Pollos Hermanos",
    members: 5,
  },
  {
    id: 2,
    name: "Los Pollos Hermanos",
    members: 5,
  },
  {
    id: 3,
    name: "Los Pollos Hermanos",
    members: 5,
  },
  {
    id: 4,
    name: "Los Pollos Hermanos",
    members: 5,
  },
];
