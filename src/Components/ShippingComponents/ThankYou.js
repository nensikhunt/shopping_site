import "./ThankYou.css";
function ThankYou() {
  return (
    <div className="thankyou-empty-main-div">
      <i class="fa fa-heart" style={{ fontSize: "600%", margin: "5% 40%", color: "gray" }}></i>
      <h5>Your Wishlist is Empty</h5>
      <p>Create your first wishlist request</p>
    </div>
  );
}

export default ThankYou;