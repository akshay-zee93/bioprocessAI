import * as React from "react";

// TODO: Add upgrade links directing to the dashboard upgrade page
// TODO: Add CTA to upgrade in the email
// TODO: Also cater for limited enterprise plan to suggest upgrading to the unlimited enterprise plan?
export const GuardrailsUsageEmailTemplate = ({
  firstName,
  percentage,
  formattedLimit,
  planName,
}) => (
  <div>
    <p>
      <strong>👋 Hi{firstName ? ` ${firstName}` : ""},</strong>
      <br></br>
      <br></br>
      you have used <strong>{percentage}%</strong> of your Guardrails monthly
      limit of {formattedLimit} requests. Keep it up! 👍
    </p>
    {planName.toLowerCase().startsWith("free") && (
      <p>
        As you are on the free plan, consider upgrading for more requests and
        higher rate limits. More power! 💡💪
      </p>
    )}
    {convertFormattedNumberToInteger(formattedLimit) ===
      getProfessionalLimit() && (
      <p>
        Consider upgrading to the Enterprise plan for more requests and higher
        rate limits. Sky&apos;s the limit! 🚀 🌌
      </p>
    )}
    <br></br>
    <strong>Stay secure with Enkrypt AI</strong>
    <br></br>
    <em>
      Log in to <a href="https://app.enkryptai.com">app.enkryptai.com</a> to
      find out more.
    </em>
  </div>
);

export const StripeGuardrailsCheckoutSuccessEmailTemplate = ({
  firstName,
  planName,
  expiryString,
  formattedLimit,
}) => (
  <div>
    <p>
      <strong>👋 Hi{firstName ? ` ${firstName}` : ""},</strong>
      <br></br>
      <br></br>
      {`You have successfully subscribed to Guardrails ${planName} plan${
        formattedLimit === "-1"
          ? " with unlimited"
          : ` with a monthly limit of ${formattedLimit}`
      } requests 🎉`}
    </p>
    <p>
      {/* TODO: Auto charge */}Your plan is set to expire on{" "}
      <strong>{expiryString}</strong> ⏳
    </p>
    <br></br>
    <strong>Stay secure with Enkrypt AI</strong>
    <br></br>
    <em>
      Log in to <a href="https://app.enkryptai.com">app.enkryptai.com</a> to
      find out more.
    </em>
  </div>
);
