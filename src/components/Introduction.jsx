import React, { Component } from 'react'
import AcademicDetails from './AcademicDetails'
import Internship  from "./Internship";
import BasicDetails from "../data/BasicDetails.json";
export default class Introduction extends Component {
    render() {
        return (
            <>
            <img style={{float: "right",width:"10vw",height:"10vw"}} src={BasicDetails.image} />
            
            <div>
                
                <table style={{textAlign:"left",margin:"2vw"}}>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>: {BasicDetails.name}</td>
                        </tr>
                        <tr>
                            <th>Father's Name</th>
                            <td>: {BasicDetails.fathername}</td>
                        </tr>
                        <tr>
                            <th>Mother's Name </th>
                            <td>: {BasicDetails.mothername}</td>
                        </tr>
                    </tbody>
                   
                </table>    
               

            </div>
            <div>
                <AcademicDetails/>
            </div>
            <Internship/>
            </>
        )
    }
}
