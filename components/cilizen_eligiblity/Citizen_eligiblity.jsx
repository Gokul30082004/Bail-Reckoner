import React from "react";
import "./style.css";

export const Citizen_eligibility = () => {
  return (
    <div classNameName="proceed"> 
        <div id="tassign">
            <div className='assign-ticket'>
                <center>
                    <h3>BAIL Eligiblity</h3>
                    <div className='leave-form' id='leave-form'>
                        <table>
                            <tbody>
                                <tr>
                                    <td><label >FIR NO</label></td>
                                    <td><input  value='1/14' type='text' name='pname' className='leave-reason' id='input'/></td>
                                </tr>
                                <tr>
                                    <td><label >DISTRICT</label></td>
                                    <td><input  value='Salem' type='tel' name='pquantity' className='leave-reason' id='leave-reason'/></td>
                                </tr>
                                <tr>
                                    <td><label >POLICE STATION</label></td>
                                    <td><input  value='Salem Police Station' type='text' name='pname' className='leave-reason' id='input'/></td>
                                </tr>
                                <tr>
                                    <td><label >ELIGIBLITY</label></td>
                                    <td><label>Eligible / 75% possible</label></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        </div>


        <div id="tassign">
            <div className='assign-ticket'>
                <center>
                    <h3>PROCEDURE FOR APPLY BAIL</h3>
                    <div className='leave-form' id='leave-form'>
                        <p className="process">The process for applying for bail involves several key steps that ensure the accused's rights are protected while balancing public safety concerns. Initially, it is crucial to understand the specific charges against the individual and consult with a qualified attorney who specializes in criminal law. 
                            </p><p className="process">The attorney will help gather necessary information, such as personal details and any community ties, and prepare a formal bail application that articulates the request and addresses factors like flight risk and character references. 
                                </p><p className="process">Once the application is filed with the appropriate court, a bail hearing is scheduled where both the defense and prosecution present their arguments. The judge will then consider various factors, including the severity of the offense and the accused’s criminal history, before making a decision to grant or deny bail, often accompanied by specific conditions. 
                                    </p><p className="process">Following the court’s ruling, if bail is granted, the necessary payments must be made, and compliance with any conditions set forth by the court is essential to avoid further legal complications.</p>
                    </div>
                </center>
            </div>
        </div>
        
    </div>
  );
};