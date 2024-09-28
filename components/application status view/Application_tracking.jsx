import React from "react";
import "./style.css";

export const Application_tracking = () => {
  return (
    <div classNameName="Dashboard">
        <div id='all-courses-main-area'>
            <div className="buttons">
                <input type='search' placeholder='Search here' id='search-btn' name='search_btn'/>
            </div>
        
            <div id="table" className="table">
                <table className="table-data" id="table-data">
                    <thead>
                        <tr>
                            <th>Application No</th>
                            <th>Previous Applications</th>
                            <th>Download</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>This application arises from the State Department's decision to deny Mr. Smith's request for a permit ... </td>
                            <td><button className="cticket">Download</button></td>
                            <td>Approved</td>
                        </tr>
                        <tr>
                            <td>193</td>
                            <td>This application arises from the State Department's decision to deny Mr. Smith's request for a permit ... </td>
                            <td><button className="cticket">Download</button></td>
                            <td>Appeal</td>
                        </tr>
                        <tr>
                            <td>143</td>
                            <td>This application arises from the State Department's decision to deny Mr. Smith's request for a permit ... </td>
                            <td><button className="cticket">Download</button></td>
                            <td>Rejected</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};