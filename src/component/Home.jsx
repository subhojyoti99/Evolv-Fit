import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const step=2670;
const percentage = 2670*100/4000;
const cal=2670;
const percentagecal = 2670*100/2500;


export default function Home() {
  return (
    <div>
        
        <div className="h-container" style={{'borderRadius':'15px','flex':'1','justifyContent': 'center', 'alignItems': 'center'}}>
            <div className="container-fluid" style={{'borderRadius':'15px','flex':'1','justifyContent': 'center', 'alignItems': 'center'}}>
            <div className="row">
            <div className="col col-lg-7">
            <h1 className="text-end fa-solid fa-shoe-prints">Steps</h1>
            <FontAwesomeIcon icon="fa-solid fa-shoe-prints" />
        </div>
        <div className="col-2">
            <h1 className="text-center">Workout</h1>
        </div>
        <div className="col-2">
            <h1 className="text-left">Nutrition</h1>
        </div>
        </div>
    <div class="row justify-content-md-center m-2 bg-dark" style={{'borderRadius':'15px','flex':'1','justifyContent': 'center', 'alignItems': 'center'}}>
    <div className="col-4 col-md-5">
    <h4 className="text-left">Charvie Sharma<br/>charviesharma@gmail.com</h4>
      </div>
      <div className="col col-lg-1">
      <CircularProgressbar value={percentage} text={`${step}`} />
      <h6 className="text-center position-relative">4k target</h6>
      </div>
      <div className="col-2 col-md-2">
        <h5 className="text-center justify-content-center text-align">15th Oct <br/><br/>20th Oct</h5>
        
      </div>
      <div className="col col-lg-2">
      <div style={{ width: "50%" }}>
        <CircularProgressbar className="abc" value={percentagecal} text={`${cal}Cal`} />
      </div>
      <h6 className="text-end">2500 target</h6>
      </div>
    </div>
    <div class="row justify-content-md-center m-2 bg-dark" style={{'borderRadius':'15px','flex':'1','justifyContent': 'center', 'alignItems': 'center'}}>
    <div className="col-4 col-md-5">
    <h6 className="text-left">Charvie Sharma<br/>charviesharma@gmail.com</h6>
      </div>
      <div className="col col-lg-1">
      <CircularProgressbar value={percentage} text={`${step}`} />
      <h6 className="text-center position-relative">4k target</h6>
      </div>
      <div className="col-2 col-md-2">
        <h5 className="text-center justify-content-center text-align">15th Oct <br/><br/>20th Oct</h5>
        
      </div>
      <div className="col col-lg-2">
      <div style={{ width: "50%" }}>
        <CircularProgressbar className="abc" value={percentagecal} text={`${cal}Cal`} />
      </div>
      <h6 className="text-end">2500 target</h6>
      </div>
    </div>
    <div class="row justify-content-md-center m-2 bg-dark" style={{'borderRadius':'15px','flex':'1','justifyContent': 'center', 'alignItems': 'center'}}>
    <div className="col-4 col-md-5">
    <h6 className="text-left">Charvie Sharma<br/>charviesharma@gmail.com</h6>
      </div>
      <div className="col col-lg-1">
      <CircularProgressbar value={percentage} text={`${step}`} />
      <h6 className="text-center position-relative">4k target</h6>
      </div>
      <div className="col-2 col-md-2">
        <h5 className="text-center justify-content-center text-align">15th Oct <br/><br/>20th Oct</h5>
        
      </div>
      <div className="col col-lg-2">
      <div style={{ width: "50%" }}>
        <CircularProgressbar className="abc" value={percentagecal} text={`${cal}Cal`} />
      </div>
      <h6 className="text-end">2500 target</h6>
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}
