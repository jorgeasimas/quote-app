import React, { useEffect } from 'react';
import { useState } from 'react';
import Text from './text-component';
import './homepage.styles.css';


function Home () {

  const [count, setCount] = useState(0)
  const [task, setTask] = useState('')
  const [list, setList] = useState([])
  const [data, setData] = useState([])
  const [quote, setQuote] = useState("A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.")
  const [author, setAuthor] = useState("Elbert Hubbard")

 
  useEffect(()  => { 
    fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(json => setData(json))

  } , [])

  function handleClick() {
    if(task !== "") {
    setList([...list, {task: task}])
    setTask('')
    }
    else {
      alert("please fill out field")
    }  
  }

  function quoteGenerator () {
    const min = 0
    const max = data.length - 1
    const rand = min + Math.random() * (max - min)
    const round = rand.toFixed()
    setQuote(data[round].text)
    setAuthor(data[round].author)
  }

  return(
     <div className="App">
      <div className="sign-in">    
        <form>
            <div className="group">
              <button onClick={() => setCount(previous => previous -1)}>-</button>
              <b style={{color: "white"}}>{count}</b>
              <button onClick= {() => setCount(previous => previous +1)}>+</button>
              <input
                className="form-input"           
                name="task"
                type="task"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                label="task"
                required
              />
            <button onClick={handleClick}>ADD Note</button> 
            </div>  
        </form>
        <br></br>
      </div>          
        <br></br>             
        <div className="card-list">{list.map((newlist, index) => (
          <div className="card-container">
                <h1>Note</h1><p>{newlist.task}</p>
          </div>   
      ))}
      </div> 
      <br></br> 
      <div>
         <button onClick={quoteGenerator}>Fetch random quote</button>
         </div>
        
      <br></br>
      <div className="card-quote">
            <Text text={quote} author={author}></Text>
      </div>
    </div>
  )


}

export default Home;