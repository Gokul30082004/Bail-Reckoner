import React from "react";
import "./style.css";

export const Judge_assitant = () => {
  return (
    <div classNameName="Dashboard">
        <div id='all-courses-main-area'>
        <center><h3>ASSISTANT</h3></center>
            <div id="table" className="table">
                <h4>Calculated Risk Factor</h4>
                
                <div id="table" className="table">
                <table className="table-data" id="table-data">
                    <thead>
                        <tr>
                            <th>Factor</th>
                            <th>Weight</th>
                            <th>Score (1-5)</th>
                            <th>Weighted Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Offense Severity</td>
                            <td>0.3</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Flight Risk</td>
                            <td>	0.25</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Criminal History</td>
                            <td>0.2</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Character References</td>
                            <td>0.1</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Threat to Society</td>
                            <td>	0.15</td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>Total Score</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            </div>  
            <center><h3>Old Relevent Applications</h3></center>
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