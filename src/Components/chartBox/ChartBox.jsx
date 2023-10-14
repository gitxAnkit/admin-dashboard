import React from 'react'
import "./ChartBox.scss"
import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartBox = (props) => {
  return (
    <div className='chartBox'>

        <div className="boxInfo">

            <div className="title">
                <img src="props.icon" alt="" />
                <span>{props.title}</span>
            </div>

            <h1>{props.number}</h1>
            <Link style={{color:props.color}} to="/">View All</Link>

        </div>
        
        <div className="chartInfo">

            <div className="chart">

            <ResponsiveContainer width="99%" height="100%">
               <LineChart data={props.chartData}>
                <Tooltip
                  contentStyle={{background:"transparent", border: "none"}}
                  labelStyle={{display:"none"}}
                  position={{x: 10, y:60}}
                />
                 <Line
                  type="monotone" 
                  dataKey={props.dataKey} 
                  stroke={props.color} 
                  strokeWidth={2}
                  dot={false}
                  
                   />
               </LineChart>
             </ResponsiveContainer>

            </div>

            <div className="texts">
                <span className="percentage"
                  style={{color:props.percentage <0? "tomato" :"limegreen"}}
                >{props.percentage }%</span>
                <span className="duration">this month</span>
            </div>

        </div>
    </div>
  )
}

export default ChartBox