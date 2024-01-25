import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './App';
import Header from './Components/Header';

// import FavoriteColor from './ReactInterviewPreparation/Hooks';

// import { Counter } from './ReactInterviewPreparation/Hooks';

// Coding Assignment:

// Creating a react element using react.createElement
// const element = React.createElement("h1",{},"Hello, React.createElement")

//  Create a Nested header Element using React.createElement(h1,h2,h3 inside a
// div with class “title”)


// const heading = React.createElement('div',{class:"title"},[React.createElement('h1',{},'This is h1 Tag'),React.createElement('h2',{},'This is h2 Tag'),React.createElement('h3',{},'This is h3 tag')])

// // creating a react element using JSX
// const element = <h1>Hello, JSX!</h1>;

// ○ Create the same element using JSX

// const heading1 = (
//         <div>
//             <h1 className='h1 tag'>This is h1 tag</h1>
//             <h2 className='h2 tag'>This is h2 tag</h2>
//             <h3 className='h3 tag'>This is h3 tag</h3>
//         </div>
//     )


// ○ Create a functional component of the same with JSX

// const Heading = () => {
//     return (
//         <div>
//             {element}
//             {heading1}
//             <h1>This is a functional component</h1>
//             <h2>This is h2 tag</h2>
//             <h3>This is h3 tag</h3>
//         </div>
//     )
// }



const  root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter></Counter>)