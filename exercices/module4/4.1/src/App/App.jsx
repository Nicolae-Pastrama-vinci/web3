import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewName = (e) => {
    setNewName(e.target.value);
  }
  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  }

  const addNewName = (e) => {
    e.preventDefault();
    const addName = {
      name: newName,
      id : persons.length + 1,
      number : newNumber
    }
    persons.some(person => person.name === newName) 
    ? alert(`${newName} is already added in the phonebook`)
      : setPersons(persons.concat(addName));
  
    setNewName("");
    setNewNumber("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input  onChange={handleNewName} value={newName}/>
          <div>number: <input onChange={handleNewNumber} value={newNumber}/></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default App