import { Pagination } from 'antd';



function Footer() {
  return (
    <footer className="footer">
      <div className='Container'>
        <div className='footer-pagination'>
          <Pagination defaultCurrent={6} total={500} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;