import React, { useState } from 'react'

export default function Main() {
    return (
        <div>
            <div className='main'>
                <p className="sp">BR</p><h3 className='spe'>Architects</h3>
            </div>
            <div className="container">
                <h2 className='mt-5'>Projects</h2>
                <hr />
            </div>
            <div className='row'>
            <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Summer House</span>
                <img src="https://www.w3schools.com/w3images/house5.jpg" style={{ width: '20rem' }} />
            </div> 
            <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Brick House</span>
                <img src="https://www.w3schools.com/w3images/house2.jpg" style={{ width: '20rem' }} />
            </div>
             <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Renovated</span>
                <img src="https://www.w3schools.com/w3images/house3.jpg" style={{ width: '20rem' }} />
            </div> 
            <div  className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Barn House</span>
                <img src="https://www.w3schools.com/w3images/house4.jpg" style={{ width: '20rem' }} />
            </div>
             <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Renovated</span>
                <img src="https://www.w3schools.com/w3images/house3.jpg" style={{ width: '20rem' }} />
            </div> 
            <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Barn House</span>
                <img src="https://www.w3schools.com/w3images/house4.jpg" style={{ width: '20rem' }} />
            </div>
             <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Summer House</span>
                <img src="https://www.w3schools.com/w3images/house5.jpg" style={{ width: '20rem' }} />
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
                <span style={{width : 150}} class="badge text-bg-warning">Brick House</span>
                <img src="https://www.w3schools.com/w3images/house2.jpg" style={{ width: '20rem' }} />
            </div>
        </div>
        </div >
    )
}
