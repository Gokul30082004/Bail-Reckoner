import React from "react";
import "./style.css";

export const Advocate_surity = () => {
  return (
    <div classNameName="proceed"> 
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
                                    <td><label >Surity 1</label></td>
                                    <td><button type='submit'name='submit'className='apply-leave-btn'>Biometric</button></td>
                                </tr>
                                <tr>
                                    <td><label >Surity 2</label></td>
                                    <td><button type='submit'name='submit'className='apply-leave-btn'>Biometric</button></td>
                                </tr>
                                <tr>
                                    <td><label >Fine</label></td>
                                    <td><button type='submit'name='submit'className='apply-leave-btn'>Pay Fine</button></td>
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