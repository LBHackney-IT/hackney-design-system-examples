import { useEffect, useRef } from "react"
import { Accordion } from "lbh-frontend"

const MyAccordion = () => {
  const ref = useRef(null)

  useEffect(() => {
    new Accordion(ref.current).init()
  }, [])

  return (
    <div
      className="govuk-accordion lbh-accordion"
      id="default-example"
      data-attribute="value"
      ref={ref}
    >
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-1"
            >
              Section A
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-1"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-1"
        >
          <ul className="lbh-list lbh-list--bullet">
            <li>Example item 1</li>
          </ul>
        </div>
      </div>
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-2"
            >
              Section B
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-2"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-2"
        >
          <ul className="lbh-list lbh-list--bullet">
            <li>Example item 2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyAccordion
