import { Link } from "react-router-dom";
import "./BankAccountStatementUpload1.css";

const BankAccountStatementUpload1 = () => {
  return (
    <div className="bank-account-statement-upload">
      <section className="frame-section">
        <div className="bank-account-statement-upload-wrapper">
          <b className="bank-account-statement">
            Bank account statement upload
          </b>
        </div>
        <div className="upload-bank-statement-for-the-wrapper">
          <div className="upload-bank-statement-container">
            <span>{`Upload Bank Statement for the last 3 months from `}</span>
            <b>{`AUG 23 `}</b>
            <span>to</span>
            <b> NOV 23</b>
          </div>
        </div>
        <div className="frame-parent22">
          <div className="radio-parent">
            <img className="radio-icon" alt="" src="/radio.svg" />
            <div className="upload-bank-statement-container">August 2023</div>
          </div>
          <div className="radio-parent">
            <div className="radio-icon">
              <img className="radio-child" alt="" src="/ellipse-10.svg" />
              <img className="radio-item" alt="" src="/ellipse-11.svg" />
              <b className="b1">!</b>
            </div>
            <div className="upload-bank-statement-container">
              September 2023
            </div>
          </div>
          <div className="radio-parent">
            <div className="radio-icon">
              <img className="radio-child" alt="" src="/ellipse-10.svg" />
              <img className="radio-item" alt="" src="/ellipse-11.svg" />
              <b className="b1">!</b>
            </div>
            <div className="upload-bank-statement-container">November 2023</div>
          </div>
        </div>
        <div className="frame-parent23">
          <div className="uploaded-pdfs-2-wrapper">
            <b className="bank-account-statement">Uploaded PDFs (2)</b>
          </div>
          <div className="group-parent">
            <img className="group-icon" alt="" src="/group-113172.svg" />
            <input className="frame-input" type="file" required />
          </div>
          <div className="inputs-parent">
            <div className="inputs">
              <div className="full-name-parent">
                <div className="bank-account-statement">PDF Password</div>
                <img className="vector-icon5" alt="" src="/vector3.svg" />
              </div>
              <div className="input-box">
              <div className="bank-account-statement">Enter here</div>
                <div className="vector-wrapper">
                  <img className="vector-icon6" alt="" src="/vector4.svg" />
                </div>
              </div>
              <div className="your-data-is-encrypted-and-wil-wrapper">
                <div className="bank-account-statement">
                  Your data is encrypted and will be safe with us!
                </div>
              </div>
            </div>
            <Link className="continue-wrapper" to="/">
              <b className="continue">Continue</b>
            </Link>
          </div>
        </div>
      </section>
      <div className="browser-mock1">
        <div className="browser-mock-child1" />
        <div className="browser-mock-child2" />
        <div className="carepayoneloactionclinic1">{`carepay.one/<loaction>/<clinicname>`}</div>
        <div className="rectangle-parent4">
          <div className="group-child10" />
          <div className="div1">15</div>
        </div>
        <img className="browser-mock-child3" alt="" src="/group-113157.svg" />
        <div className="rectangle-parent5">
          <div className="group-child11" />
          <div className="mask-group1">
            <div className="mask-group-item" />
          </div>
        </div>
        <div className="status-bar1">
          <b className="b3">9:41</b>
          <div className="rectangle-parent6">
            <div className="group-child12" />
            <div className="group-child13" />
            <div className="group-child14" />
          </div>
          <div className="rectangle-parent7">
            <div className="group-child15" />
            <div className="group-child16" />
            <div className="rectangle-parent8">
              <div className="group-child17" />
              <div className="group-child18" />
              <div className="group-child19" />
            </div>
          </div>
        </div>
      </div>
      <nav className="bank-account-statement-upload-inner">
        <nav className="frame-nav">
          <div className="carepay-logo-main-wo-padding-container">
            <div className="frame-nav">
              <img className="layer-1-icon1" alt="" src="/layer-11.svg" />
            </div>
          </div>
          <div className="frame-parent24">
            <div className="vector-container">
              <img className="arrow-icon" alt="" src="/arrow-1.svg" />
            </div>
            <div className="group-container">
              <div className="rectangle-parent9">
                <div className="group-child20" />
                <div className="group-child21" />
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default BankAccountStatementUpload1;
