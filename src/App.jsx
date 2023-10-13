import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // get data
    axios({
      method: "GET",
      url: "http://localhost:3000/meals"
    }).then((response) => {
      setMeals(response.data)
    });

  }, [])


  return (
    <>
      <h1>My meals app</h1>
      <p>blah</p>
      {meals.map((meal) =>
        <div key={JSON.stringify(meal)}>
          <h2>{meal.name}</h2>
          <p>{meal.type}</p>
          <p>{meal.instructions}</p>
        </div>)
      }
    </>
  )
}

export default App
