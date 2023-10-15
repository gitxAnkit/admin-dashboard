import React from 'react'
import "./BarChartBox.scss"
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartBox = (props) => {
  return (
    <div className='barChartBox'>

        <h1>{props.title}</h1>

        <div className="chart">
            <ResponsiveContainer width="99%" height={150}>
                <BarChart width={150} height={40} data={props.chartData}>
                    <Tooltip
                        contentStyle={{background: "#2a3447", borderRadius: "5px"}} 
                        labelStyle={{display:"none"}}
                        cursor={{fill:"none"}}/>
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BarChartBox