import React, { Component } from 'react'
import BasicDetails from "../data/BasicDetails.json";
export default class Projects extends Component {
    render() {
        return (
            <div style={{marginLeft:"2vw"}}>
            <h2>Internship Projects:</h2>
            {
                    BasicDetails.projects.map((data,index)=>{
                        return<>
                            <b>{data.title}</b>
                            <p>
                                {data.description}
                            </p>
                            <p>
                                <b>Repository</b>({data.repository})
                            </p>
                        </>
                        })
                }
                {/* <b></b>
                
                <p> (https://github.com/prafulupadhyaya/email_spam_classifier)</p>

                <b></b>
                <p>
                Developed a SVM classifier for recognizing whether an email is spam or not.
The model was trained and tested using spam dataset giving 96% accuracy.
                </p>
                <p><b>Repository</b> ()</p> */}
            </div>
        )
    }
}
