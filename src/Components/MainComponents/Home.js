import { Slide, Fade,Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.css';

function Home() {
  const data = [
    {
      url: './bg1.jpg',
      caption: 'Slide 1'
    },
    {
      url: './bg2.jpg',
      caption: 'Slide 2'
    },
    {
      url: './bg3.jpg',
      caption: 'Slide 3'
    },
    {
      url: './bg4.jpg',
      caption: 'Slide 4'
    }
  ];
  return (
    <div className='slide-show-main-div'>
      <div className='slide-show-side-navbar'>
        <h4>men's wear</h4>
      </div>
      <div className='slider-main-div'>
        <Fade>
          {data?.map((slideImage, index) => (
            <div className='slider-container'>
              <div className="each-slide" key={index}>
                <img className='imgages' src={slideImage.url} />
                {/* <h5 className='caption1'>{slideImage.caption}</h5> */}
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
}

export default Home;