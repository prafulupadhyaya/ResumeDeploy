import React, { Component } from 'react'
import Data from '../data/BasicDetails.json'
export default class AcademicDetails extends Component {
    render() {
        return (
            <div style={{marginLeft:"2vw"}}>
                <h3>Academic Details</h3>
                <table style={{width:"50%",textAlign:"left"}}>
                    <tbody>
                        <tr>
                            <th>Year</th>
                            <th>Degree</th>
                            <th>Institute</th>
                            <th>CGPA/%</th>
                        </tr>
                        { Data.academicDetails.map((data,index)=>{
                        return <tr>
                            <td>{data.year}</td>
                            <td>{data.degree}</td>
                            <td>{data.institute}</td>
                            <td>{data.percentage}</td>
                        </tr>
                        })}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}
