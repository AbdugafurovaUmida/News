import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import newsarr from './newsArr';
import News from './news';


const newsList = newsarr.map((el) => {
  return <News newsObj={el} />
});


function NewsPoster(props){
  if(props.poster){
    return <img src={props.poster} alt=""/>
  }else{
    return <div className = 'poster'>Poster</div>
  }
}


function Intro() {
  return (
    <section className='Intro'>
      <div className='Container'>
        <Row justify="center">
          <Col span={14}>
            <Carousel autoplay>
              <div className='carousel'>
                <NewsPoster poster={newsarr[3].urlToImage} />
                <div className='carousel-info'>
                  <div className='carousel__theme'>{newsarr[3].author}</div>
                  <h3 className='carousel__title'>{newsarr[3].title}</h3>
                  <p className='carousel__description'>{newsarr[3].description}</p>
                  <span className='carousel__published'>{newsarr[3].publishedAt}</span>
                </div>
              </div>
              <div className='carousel'>
                <img className='carousel__image' src={newsarr[4].urlToImage} alt='' />
                <div className='carousel-info'>
                  <div className='carousel__theme'>{newsarr[4].author}</div>
                  <h3 className='carousel__title'>{newsarr[4].title}</h3>
                  <p className='carousel__description'>{newsarr[4].description}</p>
                  <span className='carousel__published'>{newsarr[4].publishedAt}</span>
                </div>
              </div>
              <div className='carousel'>
                <img className='carousel__image' src={newsarr[5].urlToImage} alt='' />
                <div className='carousel-info'>
                  <div className='carousel__theme'>{newsarr[5].author}</div>
                  <h3 className='carousel__title'>{newsarr[5].title}</h3>
                  <p className='carousel__description'>{newsarr[5].description}</p>
                  <span className='carousel__published'>{newsarr[5].publishedAt}</span>
                </div>
              </div>
              <div className='carousel'>
                <img className='carousel__image' src={newsarr[7].urlToImage} alt='' />
                <div className='carousel-info'>
                  <div className='carousel__theme'>{newsarr[7].author}</div>
                  <h3 className='carousel__title'>{newsarr[7].title}</h3>
                  <p className='carousel__description'>{newsarr[7].description}</p>
                  <span className='carousel__published'>{newsarr[7].publishedAt}</span>
                </div>
              </div>
            </Carousel>
          </Col>
          <Col span={10}>
            <div className='intro-cards'>
              <div className='intro-bar'>
                <img className='intro-bar__image' src={newsarr[8].urlToImage} alt='' />
                <div className='intro-bar-info'>
                  <div className='intro-bar__theme'>{newsarr[8].author}</div>
                  <h3 className='intro-bar__title'>{newsarr[8].title}</h3>
                  <span className='intro-bar__published'>{newsarr[8].publishedAt}</span>
                </div>
              </div>
              <div className='intro-bar'>
                <img className='intro-bar__image' src={newsarr[9].urlToImage} alt='' />
                <div className='intro-bar-info'>
                  <div className='intro-bar__theme'>{newsarr[9].author}</div>
                  <h3 className='intro-bar__title'>{newsarr[9].title}</h3>
                  <span className='intro-bar__published'>{newsarr[9].publishedAt}</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* {newsList} */}

      </div>

    </section >
  );
}

export default Intro;