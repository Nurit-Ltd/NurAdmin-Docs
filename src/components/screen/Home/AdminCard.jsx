import admin from "../../../assets/image/intro/adminImage.png";
import { AdminCardData } from "../../../data/AdminCardData";

const AdminCard = () => {
  return (
    <div>
      {AdminCardData.map((cardItem) => (
        <div key={cardItem.id}>
          <div className="py-4">
            <img src={admin} alt="admin pic" />
            <div className="pt-2 flex items-center justify-center">
              <p className="text-xs text-graySm">Current Version - 1.3.0</p>
            </div>
          </div>
          
          {cardItem.content.map((items,index)=>(
             <ul key={index} className="py-3">
               <li className="leading-6 text-headingText">{items}</li>
             </ul>
          ))}
          
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
