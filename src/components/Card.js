import React from 'react'

export default function Card() {
  return (
    <div>
      <div className="card mt-3 " style={{ width: '18rem', maxHeight: '360px' }}>
        <img src="https://t4.ftcdn.net/jpg/04/75/65/21/360_F_475652107_Sx73qgHWljGylX5KRyDFeE46ftX0A4EE.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is Some Important text.</p>
          <div className='container w-100'>
            <select className='m-2 h-100 bg-success rounded'>
              {Array.from(Array(6), (e,i)=> {
                return(
                  <option key={i+1} value={i+1}>{ i + 1 }</option>
                )
              })}
            </select>
            <select className='m-2 h-100 bg-success rounded'>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className='d-inline h-100 fs-5'>
              Total price
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
