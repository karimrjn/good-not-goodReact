import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trombi from './components/Trombi';
import Wilder from './components/wilder';

function App() {
  // const [count, setCount] = useState(0)
  const wilderArray = [
    {
      name: "Sissis",
      // imageSource: "",
      // master: false,
    },
    {
      name: "Karim",
      // imageSource: "",
      // master: true,
    },
    {
      name: "Aurelien",
      // imageSource: "",
      // master: false,
    },
    {
      name: "Emmanuelle",
      // imageSource: "",
      // master: true,
    },
    {
      name: "Guillaume",
      // imageSource: "",
      // master: false,
    },
    {
      name: "Caroline",
      // imageSource: "",
      // master: true,
    },
    {
      name: "Thibault",
      imageSource: "",
      // master: true,
    },
    {
      name: "Titouan",
      // imageSource: "",
      // master: true,
    },
    {
      name: "Akane",
      // imageSource: "",
      // master: true,
    },
    {
      name: "Alexandre",
      // imageSource: "",
      // master: false,
    },
  ];

  return (
    <div className='trombi'>
      <Trombi wilderArray={wilderArray} />
    </div>
  );
}

export default App
