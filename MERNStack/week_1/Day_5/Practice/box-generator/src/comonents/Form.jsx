import React, { useState } from "react";
import Display from "./display";


const Form = () => {

    const [color,setColor] = useState("")
    const [size,setsize]=useState("")

    const [colors,setColors] = useState(["wheat"])
    const [sizes,setsizes]=useState("200px")


    const boxHandler =(e)=> {

        e.preventDefault();

        setColors([...colors,color]);
        setsizes([...sizes,setsizes]);

        setColor("")
        setsize("")
    }

    return (
    <div>
        <form onSubmit={boxHandler}>
        <div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>          
            <h1>set color</h1>
            <label htmlFor="">Color of box: </label>
            <br />
            <input
            type="text"
            onChange={(newColor)=> setColor(newColor.target.value)}
            value={color}
            />
            <br />
            <h1>set color</h1>
            <input
            type="color"
            onChange={(newColor)=> setColor(newColor.target.value)}
            value={color}
            /></div>

            <br /><h1>set size</h1><br />
            <sizeset>
            <label htmlFor="">size of box: </label>
            <input
            type="text"
            onChange={(newsize)=> setsize(newsize.target.value)}
            value={size}
            />
            </sizeset>
        </div>
        <button>Add</button>
        </form>
        <Display colors={colors} size={sizes}/>
    </div>
    );
};

export default Form;