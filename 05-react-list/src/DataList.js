const DataList = (props) => {
  //&nbsp;//one line space
  return (
    <div>
      <ul>
        {props.data.map((item, index) => {
          return (
            <li key={index}>
              <span>{item.name}</span>
              &nbsp;
              <span>{item.age}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DataList;
