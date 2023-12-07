function Filter(props) {
  function onChangeOfSelect(e) {
    props.onSelectChange(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <select onChange={onChangeOfSelect}>
        <option value="">Select</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangaluru">Bangaluru</option>
        <option value="Gurugram">Gurugram</option>
      </select>
    </div>
  );
}

export default Filter;
