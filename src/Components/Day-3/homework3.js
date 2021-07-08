import React from "react";

export default function CompA() {
  const [object, setObject] = React.useState({
    key1: 344,
    key2: 312,
    key3: 987
  });
  const update = () =>{
    setObject({
      ...object,
   key1:666,
   key3:888   
    })
  }
  return (
    <>
      <CompB obj = {object} change = {update} />
      <CompD key1={object.key1} key2={object.key2} key3={object.key3} />
    </>
  );
}
const CompB = (props) => {
  console.log(props);
  return (
    <>
      <h1>In B</h1>
      <p>
        key1:{props.obj.key1} , key2:{props.obj.key2} , key3:{props.obj.key3}
      </p>
      <button onClick={props.change}>Update</button>
      <CompC  obj={props.obj}/>
    </>
  );
};

const CompC = (props) => {
  console.log(props);
  return (
    <>
      <h1>In C</h1>
      <p>
        key1:{props.obj.key1} , key2:{props.obj.key2} , key3:{props.obj.key3}
      </p>
    </>
  );
};

const CompD = (props) => {
  console.log(props);
  return (
    <>
    <h1>In D</h1>
    <p>
        key1:{props.key1} , key2:{props.key2} , key3:{props.key3}
      </p>
    </>
  );
};

 