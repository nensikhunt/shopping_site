import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="row align-items-center vh-10">
          <div className="col-6 mx-auto">
            <div className="card shadow border">
              <div className="card-body d-flex flex-column align-items-center">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                  the card's content.</p>
                <Link to='/product' className="btn btn-primary">Go to product Page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;