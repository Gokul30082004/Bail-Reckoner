import React from "react";
import "./style.css";

export const Advocate_apply = () => {
  return (
    <div classNameName="proce   ed"> 
        <div id="tassign">
            <div className='assign-ticket'>
                <center>
                    <h3>BAIL APPLICATION</h3>
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
                                    <td><label >DOCUMENTS</label></td>
                                    <td><button type='submit'name='submit'className='apply-leave-btn'>Upload</button></td>
                                </tr>
                                <tr>
                                    <td><label>REASON</label></td>
                                    <td><textarea id="input" className="text_area" name="message" rows="10" cols="80" placeholder="Type your message here..."></textarea></td>
                                </tr>
                            </tbody>
                        </table>
                        <button type='submit'name='submit' className='apply-leave-btn'>Apply</button>
                    </div>
                </center>
            </div>
        </div>
    </div>
  );
};