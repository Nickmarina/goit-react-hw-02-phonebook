const Filter = ({ onFilter, filter }) => {
  return (
    <div>
      <h4>Find contacts by name</h4>
      <input type="text" value={filter} onChange={onFilter}></input>
    </div>
  );
};

export default Filter;
