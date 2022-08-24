import { Slide, Fade, Zoom } from 'react-slideshow-image';
import SideBar from './SideBarNavbar/SideBar';
import './Home.css';
import Footer from './Footer';

function Home() {
  const data = [
    {
      url: './slider-images/bg1.jpg',
      caption: 'Slide 1'
    },
    {
      url: './slider-images/bg2.jpg',
      caption: 'Slide 2'
    },
    {
      url: './slider-images/bg3.jpg',
      caption: 'Slide 3'
    },
    {
      url: './slider-images/bg4.jpg',
      caption: 'Slide 4'
    }
  ];
  return (
    <>
      <div className='slide-show-main-div'>
        <div className='slide-show-side-navbar'>
          <SideBar />
        </div>
        <div className='slider-main-div'>
          <Zoom>
            {data?.map((slideImage, index) => (
              <div className='slider-container' key={index}>
                <div className="each-slide" style={{ position: "relative" }}>
                  <img className='imgages' src={slideImage.url} />
                </div>
                <div className='slider-text'>
                  <h1 className='slidet-text-h6'>{slideImage.caption}</h1>
                </div>
              </div>
            ))}
          </Zoom>
        </div>
      </div>
      <div className='home-page-content'>
        <h3>Everything you love about Amazon (and more!)</h3>
        <div className='home-page-content-inner-parent'>
          <div className='home-page-content-inner-child'>
            <i className="fa fa-globe" style={{ fontSize: "48px", color: "rgb(227, 141, 141)" }}></i>
            <h6>The world's largest selection</h6>
            <p>We go way beyond housewares. You can register for anything on Amazon.</p>
          </div>
          <div className='home-page-content-inner-child'>
            <i className="fa fa-gift" style={{ fontSize: "48px", color: "rgb(227, 141, 141)" }}></i>
            <h6>Up to 20% off</h6>
            <p>Enjoy a special  completion discount on any items left on your registry.</p>
          </div>
          <div className='home-page-content-inner-child'>
            <i className="fas fa-shipping-fast" style={{ fontSize: "48px", color: "rgb(227, 141, 141)" }}></i>
            <h6>Fast,free Shipping</h6>
            <p>Two day shipping on eligible registry items-ypu'll get your gift in a snap!</p>
          </div>
          <div className='home-page-content-inner-child'>
            <i className="fas fa-hand-holding-usd" style={{ fontSize: "48px", color: "rgb(227, 141, 141)" }}></i>
            <h6>Easy returns</h6>
            <p>Don't love it? You can return any gift within 180 days.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;