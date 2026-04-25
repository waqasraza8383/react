
import './index.css'
function Hello(){
    const name="ali";
    const fathername="kaleem";

    //Arrow function
    // const Name = (yourname) => {
    //     return yourname;
    // };
    const Name=(yourname)=>{
        return yourname
    }
    function HandleClick(){
        alert("you clicked the button")
    }
    const handleinput=(event)=>{
        //i want to get value in one time when i write in input field
        console.clear();
        console.log("value", event.target.value);
    }
    const mouseover=()=>{
        alert("you hovered the mouse")
    }
    
    const doubleclick=()=>{
        alert("you double clicked")
    }
   return (
    <>
     <h1> Hello world {Name(name)}</h1>
     <h2>the father name is {Name(fathername)}</h2>
     <p onMouseOver={mouseover} onDoubleClick={doubleclick}>Hello world</p>
     <button onClick={HandleClick}>Click Me</button>
     <button onClick={()=>{
        //when i press down button the function will give me alert
        alert("you clicked the button")
     }}>Click Me</button>
     <input type="text" onChange={handleinput} />
    </>
   )

}

export default Hello;