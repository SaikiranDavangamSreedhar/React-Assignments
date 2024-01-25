import React,{useState} from "react";
import ReactDOM  from "react-dom/client";


function FavoriteColor(){
    const[color,setColor] = useState("red");


return (
    <>
    <h1> My favorite color is {color}!</h1>
    <button type="button" onClick={() => setColor('blue')}>Blue</button>
    <button type="button" onClick={() => setColor('red')}>Red</button>
    <button type="button" onClick={() => setColor('pink')}>pink</button>
    <button type="button" onClick={() => setColor('green')}>green</button>

    </>
)
}


export const Counter = () => {
    const [count,setCount] = useState(0);


    return (

        <div>
            <FavoriteColor></FavoriteColor>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count+1)}>Increment</button>
        </div>

    )
}


export default FavoriteColor;