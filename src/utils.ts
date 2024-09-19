import { Person } from './person.js';

export function greet(person: Person): string {
  return `Greetings, ${person.name}! You are ${person.age} years old.`;
}
