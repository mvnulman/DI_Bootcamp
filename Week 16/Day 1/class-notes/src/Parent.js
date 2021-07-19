const Parent = (props) => {
    console.log(props.children)
  return (
    <>
      <h1>Parent Component</h1>
      <div style = {{backgroundColor: "yellow", overflowY: "scroll", height: '100px'}} >
      {
          props.children
      }
      </div>
    </>
  );
};

export default Parent;
