import  { React } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

export const PieChartInternal = ({win,loss}) => {

  return(
    <div className="PieChartInternal">
<PieChart
  data={[
    { title: 'Loss', value: loss, color: "#FF0000" },
    { title: 'Win', value: win, color: "#008000" }
    
    
  ]}
/>
</div>
)
};