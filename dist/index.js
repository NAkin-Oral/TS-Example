import { Person } from './person.js';
import { greet } from './utils.js';
const form = document.getElementById('personForm');
const output = document.getElementById('output');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nameInput = document.getElementById('nameInput');
  const ageInput = document.getElementById('ageInput');
  const name = nameInput.value;
  const age = parseInt(ageInput.value, 10);
  const person = new Person(name, age);
  output.textContent = greet(person);
});
