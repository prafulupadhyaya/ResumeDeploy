import React, { Component } from 'react'
import SkillCard from './SkillCard'
import BasicDetails from "../data/BasicDetails.json";
export default class Skills extends Component {
    render() {
        return (
            <div className="secondpart">
                {
                    BasicDetails.skills.map((data,index)=>{
                        return <SkillCard name={data.skill} image={data.image}></SkillCard>})
                }
            </div>
        )
    }
}
