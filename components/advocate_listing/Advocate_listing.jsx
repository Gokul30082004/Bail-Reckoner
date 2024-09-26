import React from "react";
import "./style.css";

export const Advocate_listing = () => {
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
                            <th>Advocate Id</th>
                            <th>Name</th>
                            <th>Contact Info</th>
                            <th>Chat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>292710</td>
                            <td>Bob</td>
                            <td>9876567854</td>
                            <td><button className="cticket">Chat</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};