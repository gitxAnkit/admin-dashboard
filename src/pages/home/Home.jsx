import React from 'react';
import './Home.scss';
import TopBox from '../../Components/topBox/TopBox';
import ChartBox from '../../Components/chartBox/ChartBox';

import { chartBoxConversion,
        chartBoxProduct, 
        chartBoxRevenue,
        chartBoxUser,
        barChartBoxVisit, 
        barChartBoxRevenue} from '../../data';
import BarChartBox from '../../Components/barChartBox/BarChartBox';

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"> <TopBox /> </div>
      <div className="box box2"><ChartBox{... chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/> </div>
      <div className="box box4">box4</div>
      <div className="box box5"> <ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"> <ChartBox {...chartBoxConversion}/></div>
      <div className="box box7">box7</div>
      <div className="box box8"><BarChartBox {...barChartBoxVisit} /></div>
      <div className="box box9"><BarChartBox {...barChartBoxRevenue} /> </div>
    </div>
  )
}

export default Home;