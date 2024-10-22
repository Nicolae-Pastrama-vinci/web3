import { useState, useEffect } from 'react'
import personService from '../services/person'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');


  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])

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
    persons.some(persons => persons.name === newName) 
    ? alert(`${newName} is already added in the phonebook`)
      : 
        personService
        .create(addName)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName("")
          setNewNumber("")
        })
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
        {persons.map(persons => <p key={persons.id}>{persons.name} {persons.number}</p>)}
    </div>
  )
}

export default App