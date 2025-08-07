---
title: Build and Deploy an iApp?
description:
  How to build an confidential iexec application and deploy it on iexec protocol
---


## iApp Generator: Your Development Tool

Bootstrap TEE-compatible applications in minutes without any hardcoding skills,
iApp Generator handles all the low-level complexity for you.

- **Access to TEEs easily** - No need to dive into low-level requirements, build
  iApps that connect to TEE in minutes
- **Check and deploy iApps quickly** - iApp Generator checks that your iApp
  complies with the iExec Framework and streamlines its deployment
- **Select your project mode & language** - Select between basic or advanced
  setup depending on your iExec level experience. You also have the choice
  between Python or JavaScript

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

**Email Notification iApp**

```python
# User runs: "Send updates to my contacts about my project"
contacts = load_protecteddata()  # User's protected contact list
for contact in contacts:
    send_email(contact, project_update_message)
# → Emails sent directly, you never see the addresses
```

**Oracle Update iApp**

```python
# User runs: "Update price oracle with my private trading data"
trading_data = load_protecteddata()  # User's protected trading history
average_price = calculate_weighted_average(trading_data)
update_oracle_contract(average_price)
# → Oracle updated with real data, trading history stays private
```

**Automated Transactions iApp**

```python
# User runs: "Buy tokens when my portfolio meets certain conditions"
portfolio = load_protecteddata()  # User's protected portfolio data
if should_buy_tokens(portfolio):
    execute_trade(token_address, amount)
# → Trade executed based on private data, portfolio details stay hidden
```
