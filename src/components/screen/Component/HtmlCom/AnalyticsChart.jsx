import { analyticChart } from '../../../../data/formInputData';

const AnalyticsChart = () => {
  return (
    <div className="pt-20">
    {analyticChart.map((item)=>(
      <div key={item.id} className="space-y-8">
          <h3 className="text-xl text-headingText font-bold leading-6">{item.title}</h3>
          <p className="text-headingText leading-6">{item.description.split(' ').map((word, index) => (
              (word === 'Default' || word === 'Active' || word === 'Disabled') ? 
              <span className="font-bold" key={index}>{word} </span> : word + ' '
            ))}</p>
          <div>
            <img src={item.formImg} alt="form-input" />
          </div>
      </div>
    ))}
    <div className="w-full h">
       <p></p>
    </div>
 </div>
  );
};

export default AnalyticsChart;