import { useEffect, useRef } from "react";

const MyDetails = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (window !== undefined) {
      const Details = require("lbh-frontend").Details;
      new Details(ref.current).init();
    }
  }, []);
  return (
    <details className="govuk-details  lbh-details" ref={ref}>
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">
          Help with nationality
        </span>
      </summary>
      <div className="govuk-details__text">
        We need to know your nationality so we can work out which elections
        you’re entitled to vote in. If you can’t provide your nationality,
        you’ll have to send copies of identity documents through the post.
      </div>
    </details>
  );
};

export default MyDetails;
