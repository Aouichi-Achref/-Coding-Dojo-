import React, { useState } from "react";
import Display from "./display";


const Form = () => {

    const [color,setColor] = useState("")
    const [colors,setColors] = useState(["wheat"])

    const boxHandler =(e)=> {

        e.preventDefault();

        setColors([...colors,color]);

        setColor("")
    }

  return (
    <div>
      <form onSubmit={ boxHandler}>
        <div>
          <label htmlFor="">Color : </label>
          <br />
          <input
            type="text"
            onChange={(newColor)=> setColor(newColor.target.value)}
            value={color}
            />
          <input
            type="color"
            onChange={(newColor)=> setColor(newColor.target.value)}
            value={color}
            />
        :
        </div>
        <button>Add</button>
      </form>
      <Display colors={colors} ></Display>

    </div>
  );
};

export default Form;
