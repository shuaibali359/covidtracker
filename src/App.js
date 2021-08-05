import React, {useEffect, useState} from 'react'
import './App.css'

const App = () => {
  const [record, setRecord] = useState([]);
   const [currentPage, setCurrentPage] = useState(0);
  useEffect( async () => {
    const res = await fetch('https://api.covid19india.org/data.json')
    const actualData = await res.json();
    const data = actualData.statewise[currentPage];
    setRecord(data);
    console.log(data[0]);
  }, [currentPage])
  const incrementPageNumber = () =>  setCurrentPage(prevPage => prevPage + 1);
    const decrementPageNumber = () => {
  if(currentPage <= 1) return; 
  setCurrentPage(prevPage => prevPage - 1);
}
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <h2 className="h1">INDIA COVID-19 CORONAVIRUS TRACKER</h2>
                <div className="box">
            <div className="box-1">
              <span><p>our </p><h2>State</h2></span>
              <h2>{record.state}</h2>
            </div>
             <div className="box-2">
              <span><p>our </p><h2>RECOVERED</h2></span>
              <h2>{record.recovered}</h2>
            </div>
             <div className="box-3">
              <span><p>our </p> <h2>CONFIRMED</h2></span>
              <h2>{record.confirmed}</h2>
            </div>
             <div className="box-4">
              <span><p>our </p><h2>DEATH</h2></span>
              <h2>{record.deaths}</h2>
            </div>
             <div className="box-5">
              <span><p>our </p><h2>ACTIVE</h2></span>
              <h2>{record.active}</h2>
            </div>
             <div className="box-6">
              <span><p>our </p><h2>UPDATED</h2></span>
              <h2>{record.lastupdatedtime}</h2>
            </div>
          </div>
          <div className="btn">
            <button onClick={decrementPageNumber}>Prev</button>
            <button onClick={incrementPageNumber}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App