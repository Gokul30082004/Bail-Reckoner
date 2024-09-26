import React from "react";
import "./style.css";

export const Advocate_dashboard = () => {
  return (
    <div classNameName="Dashboard">
        <div className="buttons">
            <button className="cticket">Manage Clients</button>
            <button className="cticket">Apply Bail</button>
        </div>
        <div id='all-courses-main-area'>
            <div className="buttons">
                <input type='search' placeholder='Search here' id='search-btn' name='search_btn'/>
            </div>
        
            <div id="table" className="table">
                <table className="table-data" id="table-data">
                    <thead>
                        <tr>
                            <th>Application No</th>
                            <th>Bail Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>This application arises from the State Department's decision to deny Mr. Smith's request for a permit ... </td>
                            <td><button className="cticket">Surity</button></td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td>This application arises from the State Department's decision to deny Mr. Rajesh's request for a permit ... </td>
                            <td><a >Approved</a></td>
                        </tr>   

                        <tr>
                            <td>143</td>
                            <td>This application arises from the State Department's decision to deny Mr. Arun's request for a permit ... </td>
                            <td><a >Denied</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};