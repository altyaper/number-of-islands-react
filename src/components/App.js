import { useState } from 'react';
import { cloneGrid, calculateIslands } from '../utils/world_utils';
import { Container } from 'react-bootstrap';
import HeaderForm from './HeaderForm';
import MapDisplay from './MapDisplay'
import UserMessage from './UserMessage'

const App = () => {

  const [map, setMap] = useState({
    width: 0,
    height: 0,
    grid: [],
    islands: 0
  });

  const handleOnSubmit = newMap => {
    setMap(newMap);
  }

  const handleOnGridChange = newGrid => {
    const clone = cloneGrid(newGrid);
    const nIslands = calculateIslands(clone);
    setMap({
      ...map,
      grid: newGrid,
      islands: nIslands
    });
  }

  return (
    <>
      <Container className='pt-4'>
        <HeaderForm
          initialDimentions={map}
          onSubmit={handleOnSubmit} />
      {!map.grid.length && (
        <UserMessage />
      )}
      </Container>
        <MapDisplay
          onGridChange={handleOnGridChange}
          map={map} />
    </>
  );
}

export default App;
