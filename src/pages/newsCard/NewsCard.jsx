import { Link } from "react-router-dom";



const NewsCard = ({ news }) => {
  const { author, image_url, title, details, _id } = news;
  const {name, published_date, img} = author
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="flex justify-between  p-2 mb-2 ">
            <div className="flex gap-2 items-center">
                <div ><img className="w-[50px] rounded-full" src={img} alt="" /></div>
                <div className="">
                    <div><h2>{name}</h2></div>
                    <div><p>{published_date}</p></div>
                </div>
            </div>
            <div className="flex items-center">
               <p>bookMark</p>
            </div>
        </div>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <figure>
         <img  src={image_url} alt="" />
        </figure>
        <div className="mt-2 "> <p>
            {
              details.length > 200? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}className="font-bold  text-xl text-purple-500">Read more ...</Link></p> : 
              <p>{details}</p>
            }</p></div>
        <div className="card-body">
          
         
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
