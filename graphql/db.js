export const people = [
  {
    id:1,
    name: "nayon",
    age: 18,
    gender: "female"
  },
  {
    id:2,
    name: "nayon",
    age: 18,
    gender: "female"
  },
  {
    id:3,
    name: "nayon",
    age: 18,
    gender: "female"
  },
  {
    id:4,
    name: "nayon",
    age: 18,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
}