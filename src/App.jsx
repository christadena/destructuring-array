import cars from './Cars'
import './App.css'



function App() {
  const carData = cars.map((car) => {
    return {
      model: car.model,
      topSpeed: car.speedStats.topSpeed,
      topColour: car.coloursByPopularity[0],
    };
  });
  
  return (
    <>
      <div>
      <table>
        <tr>
          <th>Brand</th>
          <th>Top Speed</th>
          <th>Top color</th>
        </tr>
        <tbody>
          {carData.map((car, index) => (
            <tr key={index}>
              <td>{car.model}</td>
              <td>{car.topSpeed}</td>
              <td>{car.topColour}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
