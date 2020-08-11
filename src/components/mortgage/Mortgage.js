import React, {useEffect, useState} from 'react';

const Mortgage = () => {
  const [formData, setFormData] = useState({
    pPrice: 500000,
    iRate: 3.60,
    dPayment: 50000,
    lTerm: 35,
    mortgageType: 'P',
    dPaymentPer: 10
  });

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [loan, setLoan] = useState(0);
  const {pPrice, iRate, dPayment, lTerm, mortgageType, dPaymentPer} = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  useEffect(() =>{
    let monthlyPayment;
    if (mortgageType === "M"){
      monthlyPayment = (((iRate/100/12)*(pPrice-dPayment))/(1-(Math.pow((1+(iRate/100/12)), (-lTerm*12))))).toFixed(0);
    }else {
      monthlyPayment = (((iRate/100/12)*(pPrice-((dPaymentPer*pPrice)/100)))/(1-(Math.pow((1+(iRate/100/12)), (-lTerm*12))))).toFixed(0);
    }
    setMonthlyPayment(parseInt(monthlyPayment));
    setLoan(pPrice-dPayment);

  }, [pPrice, iRate, dPayment, lTerm, mortgageType, dPaymentPer])

  return (
    <div className="content-wrapper">
      <div className="mortgage-wrapper">
        <div className="mortgage-header">
          <h2>Mortgage calculator</h2>
          <i>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" y="0px" viewBox="0 0 356 35">
              <path
                className="st2"
                d="M13.9-0.1C6.2-0.1,0.1,5.3,0.1,11.8c0,0.2,0,0.4,0,0.5l0,0c0.5,9.8,13.8,22.6,13.8,22.6S27,22.1,27.7,
							12.3l0,0 c0-0.2,0-0.4,0-0.5C27.7,5.3,21.4-0.1,13.9-0.1z M23.3,15.1c-0.7,0.9-1.8,0.9-2.6,0.4L20,14.9l-0.9,
							6.3c0,0.4-0.2,0.7-0.4,0.9 c-0.2,0.2-0.4,0.4-0.7,0.4H16c-0.9,0-0.9-0.7-0.9-0.9l0,0l0,
							0l0.2-3c0-0.4-0.2-0.7-0.5-0.7h-2.3c-0.4,0-0.5,0.4-0.5,0.7l0.2,3 c0,0,0,0.9-0.9,0.9H9.2c-0.2,
							0-0.5-0.2-0.7-0.4c-0.2-0.2-0.4-0.5-0.4-0.9l-0.9-6.3l-0.7,0.5l0,0c-0.4,0.2-0.7,0.4-1.1,0.4 c-0.5,
							0-1.1-0.2-1.4-0.7c-0.7-0.9-0.5-1.9,0.4-2.6l8.1-6.3c0.7-0.5,1.6-0.5,2.3,0l8.1,6.3C23.9,13.2,24,
							14.4,23.3,15.1z"/>
              <g>
                <path
                  className="st2"
                  d="M37.7,4.3c0-1.8,1.4-3.1,3.2-3.1S44,2.5,44,
						  4.3s-1.4,3.1-3.1,3.1S37.7,6,37.7,4.3z"/>
                <rect x="37.9" y="9.3" className="st2" width="6" height="19.1"/>
                <path
                  className="st2"
                  d="M48.2,1.1h11.2c6.5,0,10.5,3.9,10.5,9.4l0,0c0,6.3-4.9,9.6-11,9.6h-4.6v8.2h-6V1.1H48.2z M58.9,
								  14.9 c3,0,4.7-1.8,4.7-4.2l0,0c0-2.6-1.9-4.2-4.9-4.2H54v8.4C54,14.9,58.9,14.9,58.9,14.9z"/>
                <path
                  className="st2"
                  d="M71.6,7.6h6v4.2c1.2-2.8,3.2-4.7,6.7-4.6v6.1h-0.3c-4,0-6.3,2.4-6.3,7.3v7.7h-6C71.6,
								  28.4,71.6,7.6,71.6,7.6z"/>
                <path
                  className="st2"
                  d="M84.4,18.1L84.4,18.1c0-6.1,4.9-11,11.4-11c6.5,0,11.2,4.7,11.2,10.9l0,0c0,
								  5.9-4.9,10.9-11.4,10.9 C89.1,28.9,84.4,24.2,84.4,18.1z M101.2,18.1L101.2,
								  18.1c0-3.1-2.3-5.8-5.4-5.8c-3.3,0-5.4,2.6-5.4,5.8l0,0c0,3.1,2.3,5.8,5.4,5.8 C99.1,
								  23.9,101.2,21.2,101.2,18.1z"/>
                <path
                  className="st2"
                  d="M109.4,7.6h6v3c1.4-1.9,3.5-3.3,6.5-3.3c4.9,0,9.4,3.9,9.4,10.9l0,0c0,7-4.5,10.9-9.4,
								  10.9 c-3.2,0-5.1-1.4-6.5-3.1v8.9h-6V7.6z M125.4,18.1L125.4,18.1c0-3.5-2.3-5.8-5.1-5.8s-5.1,
								  2.3-5.1,5.8l0,0c0,3.5,2.3,5.8,5.1,5.8 C123.1,23.9,125.4,21.6,125.4,18.1z"/>
                <path
                  className="st2"
                  d="M132.7,18.1L132.7,18.1c0-6.1,4.2-11,10.3-11c7,0,10.2,5.4,10.2,11.4c0,0.5,0,1.1,0,
								  1.6h-14.5 c0.5,2.6,2.5,4,5.1,4c1.9,0,3.5-0.7,5.1-2.1l3.3,3c-1.9,2.5-4.7,3.9-8.6,3.9C137.4,
								  28.9,132.7,24.6,132.7,18.1z M147.4,16.3 c-0.3-2.6-1.9-4.4-4.4-4.4c-2.4,0-4,1.8-4.5,4.4H147.4z"/>
                <path
                  className="st2"
                  d="M155.6,7.6h5.9v4.2c1.2-2.8,3.2-4.7,6.7-4.6v6.1h-0.2c-4,0-6.3,2.4-6.3,7.3v7.7h-6L155.6,
								  7.6L155.6,7.6z"/>
                <path
                  className="st2"
                  d="M173,22.5v-10h-2.4V7.4h2.4V2h5.9v5.4h4.9v5.1h-4.9v8.9c0,1.4,0.5,2.1,1.9,2.1c1.1,0,2.1-0.4,
								  3-0.7v4.7 c-1.2,0.7-2.6,1.2-4.7,1.2C175.4,28.8,173,27.4,173,22.5z"/>
                <path
                  className="st2"
                  d="M185.9,33.3l1.9-4.4c0.7,0.5,1.8,0.9,2.4,0.9c1.1,0,1.6-0.4,2.1-1.4l-8.2-21h6.3l4.7,
								  14.2l4.6-14.2h6.1 l-8.1,21.4c-1.6,4.2-3.3,5.8-6.8,5.8C189.1,34.9,187.5,34.2,185.9,33.3z"/>
                <path className="st2"
                      d="M335.9,33.3l1.9-4.4c0.7,0.5,1.8,0.9,2.4,0.9c1.1,0,1.6-0.4,2.1-1.4l-8.2-21h6.3l4.7,
								  14.2l4.5-14.2h6.1 l-8,21.4c-1.6,4.2-3.3,5.8-6.8,5.8C339,34.9,337.5,34.2,335.9,33.3z"/>
                <path
                  className="st2"
                  d="M204.1,25.3c0-1.8,1.4-3.1,3.1-3.1s3.2,1.4,3.2,3.1s-1.4,3.1-3.2,3.1C205.7,28.4,204.1,
								  27,204.1,25.3z"/>
                <path className="st2" d="M291.1,25.3c0-1.8,1.4-3.1,3.2-3.1s3.1,1.4,3.1,3.1s-1.4,3.1-3.1,
              3.1S291.1,27,291.1,25.3z"/>
                <path
                  className="st2"
                  d="M211.8,18.1L211.8,18.1c0-6.1,4.6-11,11-11c4,0,6.5,1.4,8.4,3.5l-3.7,
								  3.9c-1.4-1.4-2.6-2.3-4.7-2.3 c-3,0-5.1,2.6-5.1,5.8l0,0c0,3.1,2.1,5.8,5.2,5.8c1.9,
								  0,3.3-0.9,4.7-2.3l3.5,3.5c-2.1,2.3-4.4,3.9-8.6,3.9 C216.4,28.9,211.8,24,211.8,18.1z"/>
                <path
                  className="st2"
                  d="M231.6,18.1L231.6,18.1c0-6.1,4.9-11,11.4-11s11.2,4.7,11.2,10.9l0,0c0,5.9-4.9,10.9-11.4,
								  10.9 C236.3,28.9,231.6,24.2,231.6,18.1z M248.4,18.1L248.4,18.1c0-3.1-2.3-5.8-5.4-5.8c-3.3,0-5.4,
								  2.6-5.4,5.8l0,0 c0,3.1,2.3,5.8,5.4,5.8C246.3,23.9,248.4,21.2,248.4,18.1z"/>
                <path
                  className="st2"
                  d="M256.6,7.6h5.9v3c1.4-1.8,3.1-3.3,6.1-3.3c2.8,0,4.7,1.2,5.9,3.3c1.8-2.1,4-3.3,6.8-3.3c4.4,
								  0,7,2.6,7,7.7 v13.7h-6V16.9c0-2.8-1.2-4.2-3.5-4.2c-2.3,0-3.7,1.4-3.7,
								  4.2v11.7h-5.8V16.9c0-2.8-1.2-4.2-3.5-4.2s-3.7,1.4-3.7,4.2v11.7h-5.9v-21 C256.4
								  ,7.6,256.6,7.6,256.6,7.6z"/>
                <path
                  className="st2"
                  d="M300.4,7.6h5.9v3c1.4-1.8,3.1-3.3,6.1-3.3c2.8,0,4.7,1.2,5.9,3.3c1.8-2.1,4-3.3,6.8-3.3c4.4,0,7,
								  2.6,7,7.7 v13.7h-6V16.9c0-2.8-1.2-4.2-3.5-4.2c-2.3,0-3.7,1.4-3.7,
								  4.2v11.7h-5.8V16.9c0-2.8-1.2-4.2-3.5-4.2s-3.7,1.4-3.7,
								  4.2v11.7h-5.9v-21 C300.2,7.6,300.4,7.6,300.4,7.6z"
                />
              </g>
            </svg>
          </i>
        </div>
        <div className="mortgage-calculator">
          <div className="mortgage-result">
            <div className="mortgage-result-monthlyPayment">{monthlyPayment}<span> p/m</span></div>
            <div className="mortgage-result-loan">Loan amount<span> {loan}</span></div>
          </div>
          <form className="mortgage-form">
            <div className="form-col">
              <div className="input-group">
                <label>Property price (RM)</label>
                <input className="form-control" type="text" name="pPrice" value={pPrice} onChange={e => onChange(e)}/>
              </div>
              <div className="input-group">
                <label>Interest rate (%)</label>
                <input className="form-control" type="text" name="iRate" value={iRate} onChange={e => onChange(e)}/>
              </div>
            </div>
            <div className="form-col">
              <div>
                <div className="input-group">
                  <label>Down payment</label>
                  <div className="mortgage-style">
                    {mortgageType === 'M' ?
                      <input className="form-control" type="text" name="dPayment" value={dPayment}
                           onChange={e => onChange(e)}/> :
                      <input className="form-control" type="text" name="dPaymentPer" value={dPaymentPer}
                             onChange={e => onChange(e)}/>
                    }
                    <div className="mortgage-style__switchButtonGroup">
                      <div className="radio-group">
                        <input className="mortgage-radio" type="radio" checked={mortgageType === 'M'}
                               name="mortgageType" id="amount" value="M"
                               onChange={e => onChange(e)}/>
                        <label className="mortgage-label" htmlFor="amount">RM</label>
                      </div>
                      <div className="radio-group">
                        <input className="mortgage-radio" checked={mortgageType === 'P'} type="radio"
                               name="mortgageType" id="percent"
                               value="P"
                               onChange={e => onChange(e)}/>
                        <label className="mortgage-label" htmlFor="percent">%</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-group">
                <label>Loan term (Years)</label>
                <input className="form-control" type="text" name="lTerm" value={lTerm} onChange={e => onChange(e)}/>
              </div>
            </div>
          </form>
        </div>
        <div className="mortgage-collapse-item-wrap">
          <div className="mortgage-collapse-header" role="collapse" aria-expanded="false">
            <div className="btn">
              <div className="text">
                Please read the disclaimer
              </div>
              <i>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right"
                     className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 320 512">
                  <path fill="currentColor"
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941
                      0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484
                      101.255c-9.335-9.379-9.317-24.544.04-33.901l22.
                      667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
                </svg>
              </i>
            </div>
          </div>
          <div className="mortgage-collapse-body"/>
        </div>
      </div>
    </div>
  );
}

export default Mortgage;
