import React, { Fragment } from "react";
import "./Programs.css";
import {programsData} from "../../data/programsData"

function Programs() {
  return (
    <>
      <div className="Programs" id="programs">
        <div className="programs-header">
          <span className="stroke-text">Explore our</span>
          <span> Programs </span>
          <span className="stroke-text">to shape you</span>
        </div>
        <div className="program-categories">
          {programsData.map((program)=>(
            <Fragment >
              <div className="category">
                <div>{program.image}</div>
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">Join now</div>
              </div>
            </Fragment>
          ))
          }
        </div>
      </div>
    </>
    
  )
}

export default Programs