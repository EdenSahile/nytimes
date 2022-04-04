import SearchBar from'./SearchBar'
import '../styles/App.css';
import React, {useState} from 'react'

const App=() =>{


const [input ,setInput]=useState(" ");



const handleChange=(e)=>{

// console.log(e.target.value)
    setInput(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(input)
  }

return(

 
<div className='container'>
  <div className='row'>
    <div className='col-sm-12'>
      <SearchBar  change={(e)=>handleChange(e)}  submit={(e)=>handleSubmit(e)}/>
    </div>
</div>

<div className='row'>
  <div className='col-sm-6'>

  </div>
  </div>

</div>



)


}

export default App;
