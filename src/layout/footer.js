import React  from 'react';
import './style.css'

export const Footer = () =>
{
        return(
            <React.Fragment>
              <footer className="page-footer font-small unique-color-dark">
              <div className="footer-head">
                <div className="container">

                  <div className="row d-flex align-items-center foot-head-padding">

                    <div className="col-6 col-md-6 col-lg-5 text-md-left  contact-with-us">
                      <h6 className="mb-0">KẾT NỐI VỚI CHÚNG TÔI</h6>
                    </div>
                    <div className="col-6 col-md-6 col-lg-7 text-right icon-social">
                      <a className="fb-ic">
                        <i className="fab fa-facebook-f white-text mr-3"> </i>
                      </a>
                      <a className="tw-ic">
                        <i className="fab fa-twitter white-text mr-3"> </i>
                      </a>
                      <a className="gplus-ic">
                        <i className="fab fa-google-plus-g white-text mr-3"> </i>
                      </a>
                      <a className="li-ic">
                        <i className="fab fa-linkedin-in white-text mr-3"> </i>
                      </a>
                      <a className="ins-ic">
                        <i className="fab fa-instagram white-text"> </i>
                      </a>

                    </div>

                  </div>

                </div>
              </div>

              <div className="container text-md-left foot-ft-magin ">

                <div className="row">

                  <div className="col-12 col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footer-react">

                    {/* <h6 className="text-uppercase font-weight-bold" >2HOME</h6>
                    <hr style={{width: '60px'}}/> */}
                    <img src="../img/logo/logo2.png" className="foot-logo"/>
                    <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                      consectetur
                      adipisicing elit.</p>

                  </div>
                  <div className="col-6 col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-react">

                    <h6 className="text-uppercase font-weight-bold" >Về 2home</h6>
                    
                    <hr style={{width: '60px'}}/>
                    <p >
                      <a href="#!">Giới thiệu</a>
                    </p>
                    <p>
                      <a href="#!">Tuyển dụng</a>
                    </p>
                    <p>
                      <a href="#!">Truyền thông</a>
                    </p>
                    <p>
                      <a href="#!">Blog</a>
                    </p>

                  </div>
                  <div className="col-6 col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 footer-react">

                    <h6 className="text-uppercase font-weight-bold">Hỗ trợ</h6>
                    <hr style={{width: '60px'}}/>
                    <p>
                      <a href="#!">Trung tâm trợ giúp</a>
                    </p>
                    <p>
                      <a href="#!">An toàn mua bán</a>
                    </p>
                    <p>
                      <a href="#!">Quy định cần biết</a>
                    </p>
                    <p>
                      <a href="#!">Liên hệ hỗ trợ</a>
                    </p>

                  </div>
                  <div className="col-12 col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 footer-react">

                    <h6 className="text-uppercase font-weight-bold">Liên lạc</h6>
                    <hr style={{width: '60px'}}/>
                    <p>
                      <i className="fas fa-home mr-3"></i> Khu phố 6, Phường Linh Trung, Quận Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam.</p>
                    <p>
                      <i className="fas fa-envelope mr-3"></i> support@2home.com</p>
                    <p>
                      <i className="fas fa-phone mr-3"></i> 0917.686.101 </p>

                  </div>

                </div>

              </div>
              <hr style={{width: "100%"}}/>
              <div className="footer-copyright text-center py-3 font-footer">Copyright ©2020 All rights reserved | This template is made by
                <a href="https://dungtran.top/"> dungtran.top</a>
              </div>

              </footer>
        </React.Fragment>
        );
}