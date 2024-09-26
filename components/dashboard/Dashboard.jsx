import React from "react";
import "./style.css";

export const Dashboard = () => {
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
                            <th>Bail Details</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10</td>
                            <td>This application arises from the State Department's decision to deny Mr. Smith's request for a permit ... </td>
                            <td><button className="cticket">View</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};