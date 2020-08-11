import React from 'react';
import Moment from "react-moment";

const Property = ({item}) => {
  const priceBySqF = item.prices[0].max / (parseFloat(item.attributes.builtUp.replace(",", '')));
  return (
    <div className="content-wrapper">
      <div className="listing-wrapper">
        <div className="listing-item">
          <div className="media-col">
            <img
              src={item.medias[0].url}
              alt="listing"/>
          </div>
          <div className="description">
            <div className="description-wrapper">
              <div className="desc-row">
                <div className="realtor">{item.listers && item.listers[0]?.name}</div>
                <div className="date-posted">posted {<Moment format='LLLL'>{item.publishedAt}</Moment>}</div>
              </div>
              <div className="desc-row">
                <div className="price">{item.prices[0].currency} {item.prices[0].max}</div>
                <div className="ppsqft">
                  {priceBySqF > 0 && `(${item?.prices[0].currency} ${priceBySqF.toFixed(2)} per sq.f)`}
                </div>
              </div>
              <div className="desc-row">
                <div className="address-col">
                  <div className="listing-name">{item.title}</div>
                  <div className="listing-address">
                    {`${item?.multilanguagePlace["en-GB"].level2}, ${item?.multilanguagePlace["en-GB"].level1}`}
                  </div>
                </div>
              </div>
              <div className="desc-row">
                <div className="listing-features">
                  <div className="listing-feature">{item.propertyType}</div>
                  <div className="listing-feature">Built-up: {item.attributes.builtUp} sq. ft.</div>
                  {item.attributes.furnishing && <div className="listing-feature">{item.attributes.furnishing}</div>}
                </div>
              </div>
            </div>
            <div className="description-bottom-wrapper">
              <div className="desc-row">
                <div className="listing-specs">
                  <div className="listing-spec">
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24"
                           viewBox="0 0 24 24" width="24">
                        <g>
                          <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                          <path
                            d="M20,12c0-1.1-0.9-2-2-2V7c0-1.1-0.9-2-2-2H8C6.9,5,6,5.9,6,7v3c-1.1,0-2,
                          0.9-2,2v5h1.33L6,19h1l0.67-2h8.67L17,19h1l0.67-2 H20V12z M16,10h-3V7h3V10z M8,
                          7h3v3H8V7z M6,12h12v3H6V12z"/>
                        </g>
                      </svg>
                    </i>
                    {item.attributes.bedroom}
                  </div>
                  <div className="listing-spec">
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24"
                           viewBox="0 0 24 24" width="24">
                        <g>
                          <rect fill="none" height="24" width="24"/>
                        </g>
                        <g>
                          <g>
                            <g>
                              <circle cx="7" cy="7" r="2"/>
                            </g>
                            <g>
                              <path
                                d="M20,13V4.83C20,3.27,18.73,2,17.17,2c-0.75,0-1.47,0.3-2,0.83l-1.25,1.25C13.76,
                              4.03,13.59,4,13.41,4 c-0.4,0-0.77,0.12-1.08,0.32l2.76,2.76c0.2-0.31,0.32-0.68,
                              0.32-1.08c0-0.18-0.03-0.34-0.07-0.51l1.25-1.25 C16.74,4.09,16.95,4,17.17,4C17.63,4,18,
                              4.37,18,4.83V13h-6.85c-0.3-0.21-0.57-0.45-0.82-0.72l-1.4-1.55
                              c-0.19-0.21-0.43-0.38-0.69-0.5C7.93,10.08,7.59,10,7.24,10C6,10.01,5,11.01,5,
                              12.25V13H2v6c0,1.1,0.9,2,2,2c0,0.55,0.45,1,1,1 h14c0.55,0,1-0.45,1-1c1.1,0,
                              2-0.9,2-2v-6H20z"/>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </i>
                    {item.attributes.bathroom}
                  </div>
                  <div className="listing-spec">
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path
                          d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1
                        1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83
                        0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83
                        0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                      </svg>
                    </i>
                    {item.attributes.carPark}
                  </div>
                </div>
                <div className="listing-buttons">
                  <button className="btn listing-save">
                    Save
                    <i>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                           className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 576 512">
                        <path fill="currentColor"
                              d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9
                            171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288
                            439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5
                            8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98
                            139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"/>
                      </svg>
                    </i>
                  </button>
                  <div className="listing-details">
                    <button className="btn btn-details">
                      View details
                      <i>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                             className="svg-inline--fa fa-chevron-right fa-w-10" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <path fill="currentColor"
                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569
                              9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505
                              256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373
                              24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                        </svg>
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Property;
