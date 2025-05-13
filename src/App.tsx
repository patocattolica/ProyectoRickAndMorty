import './App.css'
import { Card } from './components';

function App() {

  // fetch('https://api.github.com/users/rafaelguilherme')
  //   .then((response) => {
  //     if (!response.ok) {

    return (
    <>
      <Card imageUrl='https://rickandmortyapi.com/api/character/avatar/1.jpeg' 
            nombre='Rick Sanchez' 
            species='Human' 
            location='Earth (C-137)' 
            status='Alive' />
    </>
  )
}

export default App
