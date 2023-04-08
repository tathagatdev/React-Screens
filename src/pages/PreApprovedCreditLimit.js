import { Link } from "react-router-dom";
import "./PreApprovedCreditLimit.css";

const PreApprovedCreditLimit = () => {
  return (
    <div className="pre-approved-credit-limit">
      <div className="frame-parent25">
        <div className="cibil-check-wrapper">
          <b className="cibil-check">CIBIL Check</b>
        </div>
        <div className="aadhaar-card-otp-verification-parent8">
          <div className="aadhaar-card-otp34">Reference ID : FGDTH12345RR</div>
          <div className="aadhaar-card-otp-verification-wrapper13">
            <b className="aadhaar-card-otp-container">
              <p className="congratulations">{`Congratulations! `}</p>
              <p className="congratulations">
                Your pre approved credit limit* is
              </p>
            </b>
          </div>
          <div className="aadhaar-card-otp-verification-wrapper14">
            <b className="cibil-check">₹ 1,00,000</b>
          </div>
        </div>
        <div className="aadhaar-card-otp-verification-wrapper15">
          <div className="aadhaar-card-otp-container1">
            <span>{`This limit is valid for only `}</span>
            <span className="days">30 Days</span>
            <span>. Apply for loan now for the above pre approved limit.</span>
          </div>
        </div>
        <div className="aadhaar-card-otp-verification-wrapper16">
          <div className="aadhaar-card-otp36">
            *Subject to necessary checks and verifications.
          </div>
        </div>
        <div className="frame-wrapper11">
          <div className="have-any-questions-parent">
            <b className="have-any-questions">Have any questions? -</b>
            <div className="get-in-touch-with-our-support-parent">
              <div className="have-any-questions">
                Get in touch with our support
              </div>
              <div className="call-support-91-11-4224-969-wrapper">
                <div className="call-support-91-container">
                  <span className="call-support">{`Call Support: `}</span>
                  <b>‎+91 806 948 9655</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link className="frame-a" to="/bank-account-statement-upload-5">
          <button className="apply-for-credit-wrapper" autoFocus>
            <b className="apply-for-credit">Apply for Credit</b>
          </button>
        </Link>
      </div>
      <nav className="pre-approved-credit-limit-inner">
        <div className="frame-parent26">
          <div className="carepay-logo-main-wo-padding-frame">
            <div className="frame-parent26">
              <img className="layer-1-icon2" alt="" src="/layer-12.svg" />
            </div>
          </div>
          <div className="frame-parent27">
            <div className="vector-frame">
              <img className="frame-child1" alt="" src="/arrow-1.svg" />
            </div>
            <div className="group-frame">
              <div className="rectangle-parent10">
                <div className="group-child22" />
                <div className="group-child23" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="browser-mock2">
        <div className="browser-mock-child4" />
        <div className="browser-mock-child5" />
        <div className="carepayoneloactionclinic2">{`carepay.one/<loaction>/<clinicname>`}</div>
        <div className="rectangle-parent11">
          <div className="group-child24" />
          <div className="div2">15</div>
        </div>
        <img className="browser-mock-child6" alt="" src="/group-113157.svg" />
        <div className="rectangle-parent12">
          <div className="group-child25" />
          <div className="mask-group2">
            <div className="mask-group-inner" />
          </div>
        </div>
        <div className="status-bar2">
          <b className="b4">9:41</b>
          <div className="rectangle-parent13">
            <div className="group-child26" />
            <div className="group-child27" />
            <div className="group-child28" />
          </div>
          <div className="rectangle-parent14">
            <div className="group-child29" />
            <div className="group-child30" />
            <div className="rectangle-parent15">
              <div className="group-child31" />
              <div className="group-child32" />
              <div className="group-child33" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreApprovedCreditLimit;
