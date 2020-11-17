import React, { Component } from 'react'
import Data from '../data/BasicDetails.json'
export default class Internship extends Component {
    render() {
        return (
            <div style={{marginLeft:"2vw"}}>
                <h3>Internships</h3>
                <table style={{width:"100%",textAlign:"left"}}>
                    <tbody>
                        <tr>
                            <th>Year</th>
                            <th>Organization</th>
                            <th>Designation</th>
                        </tr>
                        { Data.internshipDetails.map((data,index)=>{
                        return <tr>
                            <td>{data.year}</td>
                            <td>{data.organization}</td>
                            <td>{data.designation}</td>
                        </tr>
                        })}
                       
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
