
import { creditAndResource } from "../../../data/creditAndResource";

const CreditsSide = () => {
  return (
    <div className="pt-10">
       {creditAndResource.map((item)=>(
        <div key={item.id} className="space-y-4">
              <p className="text-headingText leading-6">{item.title}</p>
            <div className="space-y-3">
              {item.allPage.map((page,index)=>(
                <h4 className="text-activeBar font-bold" key={index}><a href={page.link} target="_blank">{page.page}</a></h4>
              ))}
            </div>  
        </div>
       ))}
    </div>
  );
};

export default CreditsSide;