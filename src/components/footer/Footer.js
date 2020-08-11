import React, {Fragment, useState} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  const [active, setActive] = useState('tab_1');
  const handleClick = e => {
    const index = e.target.id;
    setActive(index);
  };
  return (
    <Fragment>
      <div className="main">
        <div className="seo-footer">
          <section className="container">
            <div className="seo-footer-tabs">
              <div className="tab-links">
                <button className="btn" onClick={handleClick}  id="tab_1">Malaysia Property For Sale</button>
              </div>
              <div className="tab-links">
                <button className="btn" onClick={handleClick}  id="tab_2">Popular Property Searches</button>
              </div>
            </div>
            <section className="seo-footer-tabs-content">
              {active === 'tab_1' && <div className="content-container active" id="tab_1">
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/selangor/a-residential/" className="seo-footer-item-link">Properties
                    for sale in Selangor</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/kuala-lumpur/all-residential/"
                     className="seo-footer-item-link">Properties for sale in Kuala Lumpur</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/johor/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Johor</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/penang/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Penang</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/perak/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Perak</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/negeri-sembilan/all-residential/"
                     className="seo-footer-item-link">Properties for sale in Negeri Sembilan</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/melaka/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Melaka</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/pahang/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Pahang</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/sabah/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Sabah</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/sarawak/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Sarawak</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/kedah/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Kedah</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/putrajaya/all-residential/" className="seo-footer-item-link">Properties
                    for sale in Putrajaya</a>
                </div>
              </div>}
              {active === 'tab_2' && <div className="content-container active" id="tab_2">
                <div className="seo-footer-tab-content-item">
                  <a href={{pathname: "https://www.iproperty.com.my/sale/johor-bahru/apartment/"}} className="seo-footer-item-link">Apartment
                    for sale in Johor Bahru</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/damansara-heights/bungalow/"
                     className="seo-footer-item-link">Bungalow for sale in Damansara Heights</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/mont-kiara/condominium/" className="seo-footer-item-link">Condominium
                    for sale in Mont Kiara</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/selangor/puchong/factory/" className="seo-footer-item-link">Factory
                    for sale in Puchong</a>
                </div>

                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/petaling-jaya/office/" className="seo-footer-item-link">Office
                    for sale in Petaling Jaya</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/selangor/cheras/semi-detached-house/"
                     className="seo-footer-item-link">Semi-D for sale in Cheras</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/johor-bahru/condominium/" className="seo-footer-item-link">Condominium
                    for sale in Johor Bahru</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/selangor/cheras/shop/" className="seo-footer-item-link">Shop
                    for sale in Cheras</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/sale/selangor/puchong/terrace-link-townhouse/"
                     className="seo-footer-item-link">Terrace house for sale in Puchong</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/new-property/kuala-lumpur/" className="seo-footer-item-link">New
                    launch property in Kuala Lumpur</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/new-property/selangor/" className="seo-footer-item-link">New
                    launch property in Selangor</a>
                </div>
                <div className="seo-footer-tab-content-item">
                  <a href="https://www.iproperty.com.my/new-property/johor/" className="seo-footer-item-link">New launch
                    property in Johor</a>
                </div>
              </div>}
            </section>
          </section>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <section id="social-local-links">
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/iproperty.com.my" target="_blank" data-media-name="facebook">
                  <i title="Follow us on Facebook">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1376 128q119 0 203.5 84.5t84.5 203.5v960q0 119-84.5 203.5t-203.5
                      84.5h-188v-595h199l30-232h-229v-148q0-56 23.5-84t91.5-28l122-1v-207q-63-9-178-9-136
                      0-217.5 80t-81.5 226v171h-200v232h
                      200v595h-532q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960z"
                        fill="#d2d6da"/>
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/showcase/iproperty.com.my/" target="_blank" data-media-name="linkedin">
                  <i title="Follow us on LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74
                      51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63
                      0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32
                      41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"
                        fill="#d2d6da"/>
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/iproperty_my" target="_blank" data-media-name="twitter">
                  <i title="Follow us on Twitter">
                    <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558
                      298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055
                      0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624
                      19.818 1.624 9.421 0 18.843-1.3
                      27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969
                      7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391
                      0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365
                      109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213
                       0 57.502 12.67 76.67
                      33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827
                      21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        fill="#d2d6da"/>
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/MYiproperty/" target="_blank" data-media-name="instagram">
                  <i title="Follow us on Instagram">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138
                      0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0
                      38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zm-502-220q-7 0-76.5-.5t-105.5 0-96.5
                      3-103 10-71.5 18.5q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5
                      0 105.5 3 96.5 10 103 18.5 71.5q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5
                      76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5
                      0-105.5-.5-76.5.5-76.5
                      0-105.5-3-96.5-10-103-18.5-71.5q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5
                      0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317
                      5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208
                      10 322 124t124 322q5 88 5 317z"
                        fill="#d2d6da"/>
                    </svg>
                  </i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/iPropertyTV" target="_blank" data-media-name="youtube">
                  <i title="Follow us on YouTube">
                    <svg width="24" height="24" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1099 1244v211q0 67-39 67-23 0-45-22v-301q22-22 45-22 39 0 39 67zm338 1v46h-90v-46q0-68
                    45-68t45 68zm-966-218h107v-94h-312v94h105v569h100v-569zm288 569h89v-494h-89v378q-30 42-57
                    42-18 0-21-21-1-3-1-35v-364h-89v391q0 49 8 73 12 37 58 37 48 0
                    102-61v54zm429-148v-197q0-73-9-99-17-56-71-56-50 0-93 54v-217h-89v663h89v-48q45 55 93 55 54
                    0 71-55 9-27 9-100zm338-10v-13h-91q0
                    51-2 61-7 36-40 36-46 0-46-69v-87h179v-103q0-79-27-116-39-51-106-51-68 0-107 51-28 37-28 116v173q0
                    79 29 116 39 51 108 51 72 0 108-53 18-27 21-54 2-9 2-58zm-608-913v-210q0-69-43-69t-43 69v210q0 70 43
                     70t43-70zm719 751q0 234-26 350-14 59-58 99t-102 46q-184 21-555
                     21t-555-21q-58-6-102.5-46t-57.5-99q-26-112-26-350 0-234 26-350
                     14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26
                     350zm-998-1276h102l-121 399v271h-100v-271q-14-74-61-212-37-103-65-187h106l71 263zm370 333v175q0
                     81-28 118-38 51-106 51-67 0-105-51-28-38-28-118v-175q0-80 28-117 38-51 105-51 68 0 106 51 28 37
                     28 117zm335-162v499h-91v-55q-53 62-103 62-46 0-59-37-8-24-8-75v-394h91v367q0 33 1 35 3 22 21 22
                     27 0 57-43v-381h91z"
                        fill="#d2d6da"/>
                    </svg>
                  </i>
                </a>
              </li>
            </ul>
            <ul className="local-links">
              <li><a href="https://www.iproperty.com.my/about-us/" title="About Us" target="_self">About Us</a></li>
              <li><a href="https://www.rea-group.com/careers/locations/kuala-lumpur/" title="Careers"
                        target="_blank">Careers</a></li>
              <li><a href="https://www.iproperty.com.my/contact/contactus.aspx" title="Contact Us" target="_self">Contact
                Us</a></li>
              <li><a href="https://www.iproperty.com.my/customer-solutions/" title="Advertise with us" target="_self">Advertise
                with us</a></li>
              <li><a href="https://www.iproperty.com.my/privacy-policy/" title="Privacy Policy" target="_self">Privacy
                Policy</a></li>
              <li><a href="https://www.iproperty.com.my/terms-of-use/" title="Website Terms" target="_self">Website
                Terms</a></li>
              <li><a href="https://www.iproperty.com.my/terms-and-conditions/" title="Terms and Conditions"
                        target="_self">Terms
                and Conditions</a></li>
            </ul>
          </section>
          <section id="app-store-links">
            <ul className="app-store-links">
              <li>
                <a className="app-store"
                   href="https://itunes.apple.com/app/iproperty-com-malaysia-property/id366785142?mt=8"
                   title="Download our app from the AppStore" data-platform="ios" target="_blank"/>
              </li>
              <li>
                <a className="google-play"
                   href="https://play.google.com/store/apps/details?id=com.iproperty.android.search&amp;hl=en"
                   title="Download our app from Google Play" data-platform="android" target="_blank"/>
              </li>
            </ul>
          </section>
          <section id="international-sites">
            <h3 className="site-title">International Sites:</h3>
            <ul className="sites">
              <li>
							<span className="site-wrapper">
								<a href="https://www.realestate.com.au/" target="_blank">Australia</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.squarefoot.com.hk/en" target="_blank">Hong Kong</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://housing.com/" target="_blank">India</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.rumah123.com/" target="_blank">Indonesia</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.iproperty.com.my/" target="_blank">Malaysia</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.iproperty.com.sg/" target="_blank">Singapore</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://thinkofliving.com/" target="_blank">Thailand</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.realtor.com/" target="_blank">United States</a>
							</span>
              </li>
            </ul>
          </section>
          <section id="partner-sites">
            <h3 className="site-title">Partner Sites:</h3>
            <ul className="sites">
              <li>
							<span className="site-wrapper">
								<a href="https://www.myfun.com/" target="_blank">myfun.com</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.makaan.com/" target="_blank">makaan.com</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="http://www.move.com/" target="_blank">move.com</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.proptiger.com/" target="_blank">proptiger.com</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.prakard.com/" target="_blank">prakard.com</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.realcommercial.com.au/" target="_blank">realcommercial.com.au</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.smartexpos.com/" target="_blank">SMARTExpo</a>
							</span>
              </li>
              <li>
							<span className="site-wrapper">
								<a href="https://www.99.co/" target="_blank">99.co</a>
							</span>
              </li>
            </ul>
          </section>
          <section id="copyright">
            <span>© 2020 iProperty.com Malaysia Sdn Bhd. All rights reserved. A subsidiary of REA Group Ltd.</span>
          </section>
        </div>
      </div>
    </Fragment>

  );
}

export default Footer;
