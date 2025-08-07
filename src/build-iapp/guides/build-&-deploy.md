---
title: Build and Deploy an iApp
description:
  How to build a confidential iExec application and deploy it on iExec protocol
---

# Build And Deploy your iApp

## iApp Generator: Your Development Tool

Bootstrap TEE-compatible applications in minutes without any hardcoding skills,
iApp Generator handles all the low-level complexity for you.

- **Access to TEEs easily** - No need to dive into low-level requirements, build
  iApps that connect to TEEs in minutes.
- **Check and deploy iApps quickly** - iApp Generator checks that your iApp
  complies with the iExec Framework and streamlines its deployment.
- **Select your project mode & language** - Get started with either a basic or
  advanced setup, depending on your experience with the iExec framework. You can
  use Python or JavaScript—whichever you prefer!

```bash
# Create your iApp (Python or Node.js supported)
iapp init my-privacy-app
cd my-privacy-app

# Develop and test locally (simulates TEE environment)
iapp test
# Deploy to the network
iapp deploy
```

<div class="bg-gradient-to-r from-blue-400/10 to-blue-400/5 rounded-[6px] p-4 border-l-4 border-blue-600 mb-6">
  <p class="m-0! text-sm"><strong>Note:</strong> iApp Generator currently supports Python and Node.js, but iApps can be built in any language that runs in Docker.</p>
</div>

## Real Examples

Here are some real-world examples of iApps to help you understand how they work
in practice.

**Email Notification iApp**

This iApp lets you send updates to your contacts without ever seeing their email
addresses, privacy is preserved by design.

::: code-group

```python [Python]
# User runs: "Send updates to my contacts about my project"
contacts = load_protecteddata()  # User's protected contact list
for contact in contacts:
   send_email(contact, project_update_message)
# → Emails sent directly, you never see the addresses
```

```js [Node.js]
/* User runs: "Send updates to my contacts about my project" */
const contacts = loadProtectedData(); // User's protected contact list
contacts.forEach((contact) => {
  sendEmail(contact, projectUpdateMessage);
});
// → Emails sent directly, you never see the addresses
```

:::

**Oracle Update iApp**

This iApp securely updates a price oracle using private trading data, ensuring
sensitive information stays confidential.

::: code-group

```python [Python]
# User runs: "Update price oracle with my private trading data"
trading_data = load_protecteddata()  # User's protected trading history
average_price = calculate_weighted_average(trading_data)
update_oracle_contract(average_price)
# → Oracle updated with real data, trading history stays private
```

```js [Node.js]
/* User runs: "Update price oracle with my private trading data" */
const tradingData = loadProtectedData(); // User's protected trading history
const averagePrice = calculateWeightedAverage(tradingData);
updateOracleContract(averagePrice);
// → Oracle updated with real data, trading history stays private
```

:::

**Automated Transactions iApp**

This iApp automates monthly payments using protected payment details, so
financial information remains private.

::: code-group

```python [Python]
# User runs: "Automate payments every month"
payment_info = load_protecteddata()  # User's payment details
for month in range(12):
   process_payment(payment_info)
# → Payments processed, payment details stay private
```

```js [Node.js]
/* User runs: "Automate payments every month" */
const paymentInfo = loadProtectedData(); // User's payment details
for (let month = 0; month < 12; month++) {
  processPayment(paymentInfo);
}
// → Payments processed, payment details stay private
```

:::
