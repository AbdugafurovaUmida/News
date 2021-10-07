import { Row, Col } from 'antd';
import { Slider } from 'antd';
import { Carousel } from 'antd';
import { Tabs } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Rate } from 'antd';
import newsarr from './newsArr';
import News from './news';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const newsList = newsarr.map((el) => {
  return <News newsObj={el} />
});

const { TabPane } = Tabs;
const Demo = () => (
  <Tabs defaultActiveKey="1" onChange={Tabs}>
    <TabPane tab="Fans" key="1">
      <div className="social__media__widget facebook">
        <span className="social__media__widget-icon">
          <a href="#"><IconFont className='widget__icon' type="icon-facebook" /></a>
        </span>
        <span className="social__media__widget-counter">
          19,243 fans
        </span>
        <span className="social__media__widget-name">
          like
        </span>
      </div>
    </TabPane>
    <TabPane tab="Followers" key="2">
      <div className="social__media__widget twitter">
        <span className="social__media__widget-icon">
          <a href="#"><IconFont className='widget__icon' type="icon-twitter" /></a>
        </span>
        <span className="social__media__widget-counter">
          2.076 followers
        </span>
        <span className="social__media__widget-name">
          like
        </span>
      </div>
    </TabPane>
    <TabPane tab="Users" key="3">
      <div className="social__media__widget tuichu">
        <span className="social__media__widget-icon">
          <a href="#"> <IconFont className='widget__icon' type="icon-tuichu" /></a>
        </span>
        <span className="social__media__widget-counter">
          2.076 followers
        </span>
        <span className="social__media__widget-name">
          like
        </span>
      </div>
    </TabPane>
  </Tabs>
);
function Content() {
  return (
    <section className="content">
      <div className='Container'>
        <Row >
          <Col span={12}>
            <h3 className="recent__title">Recent Post</h3>
            <Slider defaultValue={10} tooltipVisible />
            <Row >
              <Col span={7}>
                <article>
                  <div className='card-posts'>
                    <img src={newsarr[5].urlToImage} className='card-posts__img' alt='' />
                    <div className='card__post'>
                      <div className='card__post__category'>{newsarr[5].author}</div>
                      <div>
                        <h5><a className="card__post__title" href="#">{newsarr[5].title}</a></h5>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
              <Col span={7}>
                <article>
                  <div className='card-posts'>
                    <img src={newsarr[10].urlToImage} className='card-posts__img' alt='' />
                    <div className='card__post'>
                      <div className='card__post__category'>{newsarr[10].author}</div>
                      <div>
                        <h5><a className="card__post__title" href="#">{newsarr[10].title}</a></h5>
                      </div>
                    </div>
                  </div>
                </article>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <h3 className='popular__title'>Popular Post</h3>
            <Slider defaultValue={15} tooltipVisible />
            <aside>
              <div className="classlist">
                <div className="number"> <span>1</span> </div>
                <div> <a className="category" href="#">COVID-19</a>
                  <a className="category__text" href='#'>
                    Gegera Corona, Kekayaan Bos Zoom Nambah Rp 64 T dalam 3 Bulan - CNBC
                    Indonesia
                  </a></div>
              </div>
              <div className="classlist">
                <div className="number"> <span>2</span> </div>
                <div> <a className="category" href="#">STARTUP</a>
                  <a className="category__text" href='#'>
                    The West had a head start on virus preparations. Why didn't it take
                    it?
                  </a></div>
              </div>
              <div className="classlist">
                <div className="number"> <span>3</span> </div>
                <div> <a className="category" href="#">COVID-19</a>
                  <a className="category__text" href='#'>
                    America's social-distancing deniers have arrived
                  </a></div>
              </div>
              <div className="classlist">
                <div className="number"> <span>4</span> </div>
                <div> <a className="category" href="#">STARTUP</a>
                  <a className="category__text" href='#'>
                    Egypt's soap operas defy a deadly virus for Ramadan prime time. But
                    at what cost?
                  </a></div>
              </div>
            </aside>
          </Col>
        </Row>

        <h3>Sports</h3>
        <Slider defaultValue={35} tooltipVisible />
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>

        <h3>Technology</h3>
        <Slider defaultValue={50} tooltipVisible />
        <Row>
          <Col span={16}>
            <Row>
              <article>
                <div className='card-posts'>
                  <img src={newsarr[5].urlToImage} className='card-posts__img' alt='' />
                  <div className='card__post'>
                    <div className='card__post__category'>{newsarr[5].author}</div>
                    <div>
                      <h5><a className="card__post__title" href="#">{newsarr[5].title}</a></h5>
                    </div>
                  </div>
                </div>
              </article>
              <article>
                <div className='card-posts'>
                  <img src={newsarr[4].urlToImage} className='card-posts__img' alt='' />
                  <div className='card__post'>
                    <div className='card__post__category'>{newsarr[4].author}</div>
                    <div>
                      <h5><a className="card__post__title" href="#">{newsarr[4].title}</a></h5>
                    </div>
                  </div>
                </div>
              </article>
            </Row>
          </Col>
          <Col span={4}>
            <aside>
              <Demo />
              <div>
                <a href='//https//twitter.com'><Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag></a>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              </div>
              <div>
                <Rate allowHalf defaultValue={2.5} />
              </div>

            </aside>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Content;