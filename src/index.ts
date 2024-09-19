import { Person } from './person';
import { greet } from './utils';

const form = document.getElementById('personForm') as HTMLFormElement;
const output = document.getElementById('output') as HTMLDivElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const nameInput = document.getElementById('nameInput') as HTMLInputElement;
  const ageInput = document.getElementById('ageInput') as HTMLInputElement;

  const name = nameInput.value;
  const age = parseInt(ageInput.value, 10);

  const person = new Person(name, age);
  output.textContent = greet(person);
});
