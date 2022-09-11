import { useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  // const { data, loading } = useFetch("/hotels?featured=true&limit=4");
  const data = useSelector((state) => state.hotels);

  return (
    <div className="fp">
      {data?.loading ? (
        "Loading"
      ) : (
        <>
          {data?.featured.map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">Aparthotel Stare Miasto</span>
              <span className="fpCity">Madrid</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
