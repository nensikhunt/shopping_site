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
        <Zoom>
          {data?.map((slideImage, index) => (
            <div className='slider-container' key={index}>
              <div className="each-slide">
                <img className='imgages' src={slideImage.url} />
                {/* <h5 className='caption1'>{slideImage.caption}</h5> */}
              </div>
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
}

export default Home;