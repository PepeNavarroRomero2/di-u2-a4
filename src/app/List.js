import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        conocido/a por {person.accomplishment}
      </p>
    </li>
  );

  const chemistPerson = people.filter(person =>
    person.profession==='químico').map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          conocido/a por {person.accomplishment}
        </p>
      </li>
      );

      const restPerson = people.filter(person =>
        person.profession!='químico').map(person =>
          <li key={person.id}>
            <img
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              conocido/a por {person.accomplishment}
            </p>
          </li>
          );
  return (
    <article>
      <h1>Científicos Quimicos</h1>
      <ul>{chemistPerson}</ul>
      <h1>Cientificos Restantes</h1>
      <ul>{restPerson}</ul>
    </article>
  );
}
