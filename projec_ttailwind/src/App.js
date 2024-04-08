// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import pic from './Images/1.jpg'
import photo from './Images/2.jpg'

function App() {
    let template ='';
    let [count,setCount] = useState(1)
    let [pshow,setPshow] = useState(false)



    if(pshow) {
        <>
        <button>Hide</button>
        template =<p>hello vishal</p>
        </>
    }else{
        template=<button className='bg-[red] p-4' onClick={()=>(!setPshow)}>Hide</button>
    }

    let displayData = () => {
        setCount(count+1)

        // console.log(n)
        // alert('Hello Vishal');
    }
// ----------Parameters Function --------

let addData = (a,b) => {
    console.log(a+b)

}
    return (
    <>
    <div className='App'>
    <Header/>
    {template}
    {count}
    <img  width={200} src={pic} alt=''/>
    <h1 className='text-[40px]'>hello</h1>
    <button className='bg-[red] p-[10px] mr-10' onClick={()=> addData(20,25)}>Add Data </button>
    <img src={photo} alt=''/>
    <button className='bg-[red] p-[10px]' onClick={displayData}>Save</button>
    </div>
    </>
    );
}

export default App;