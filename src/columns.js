const isFunction = (value) => typeof value === "function";

function UseState(obj) {
  let initialState = obj;
  const reducer = (fn) => {
    let newState;
    if (isFunction(fn)) {
      newState = fn(initialState);
    } else {
      newState = fn;
    }
    Object.assign(initialState, newState);
  };
  return [initialState, reducer];
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render(text, record) {
      const [cellColor, setCellColor] = UseState(false);
      console.log(cellColor);
      return {
        props: {
          style: cellColor ? { background: "green" } : { background: "red" },
          onClick: () => {
            setCellColor(!cellColor);
          }
        },
        children: <div> {text} </div>
      };
    }
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    render(text, record) {
      const [cellColor, setCellColor] = UseState(false);
      console.log(cellColor);
      return {
        props: {
          style: cellColor ? { background: "green" } : { background: "red" },
          onClick: () => {
            setCellColor(!cellColor);
          }
        },
        children: <div> {text} </div>
      };
    }
  }
];
