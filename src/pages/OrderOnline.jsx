import { useNavigate } from "react-router-dom";

const OrderOnline = () => {
  const Customer = () => {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1);
    };
    return (
      <>
        <button onClick={() => goBack()} className="btn-go-back">
          Go Back
        </button>
      </>
    );
  };
  return (
    <>
      <div className="order-online">
        <h1>Coming Soon!</h1>
        <div className="go-back">
          <Customer />
        </div>
        <img
          className="reviewer-img"
          src="/images/order-online.jpg"
          alt="Order Online Image"
        />
        {/* <button className="btn-go-back">Go Back</button> */}
        {/* <button className="btn-go-back">Home</button> */}
      </div>
    </>
  );
};

export default OrderOnline;
