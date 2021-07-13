const MapDisplay = ({ map, onGridChange }) => {
  const { grid } = map;

  const handleOnClick = (i, j) => {
    grid[i][j] = grid[i][j] === 0 ? 1 : 0;
    onGridChange(grid);
  }

  return (
    <div className='text-center mt-3'>
      { grid.map((i_item, i) => {
        return (
          <div key={i} className='d-grid'>
            {i_item.map((j_item, j) => {
              const color = grid[i][j] ? 'bg-land' : 'bg-water';
              return <div key={j} onClick={() => handleOnClick(i, j)} className={`flex-grow-1 square p-3 ${color}`}></div>
            })}
          </div>
        )
      })}
    </div>
  )
}

export default MapDisplay;