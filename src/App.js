import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PreApprovedCreditLimit from "./pages/PreApprovedCreditLimit";
import BankAccountStatementUpload1 from "./pages/BankAccountStatementUpload1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pre-approved-credit-limit":
        title = "";
        metaDescription = "";
        break;
      case "/bank-account-statement-upload-5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/pre-approved-credit-limit"
        element={<PreApprovedCreditLimit />}
      />
      <Route
        path="/bank-account-statement-upload-5"
        element={<BankAccountStatementUpload1 />}
      />
    </Routes>
  );
}
export default App;
