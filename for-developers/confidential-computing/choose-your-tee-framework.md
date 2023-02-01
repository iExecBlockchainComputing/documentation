# Choose your TEE framework

{% hint style="warning" %}
Please make sure you have already checked the [quickstart](../your-first-app.md) and [Your first application](../your-first-app.md) tutorials before building your trusted application on iExec.
{% endhint %}

After understanding the fundamentals of Confidential Computing and explaining the technologies behind it, it is time to roll up our sleeves and get hands-on with [enclaves](intel-sgx-technology.md#enclave). In this guide, we will focus on protecting an application - that is already compatible with the iExec platform - using SGX, and without changing the source code. That means we will use the same code we [previously](../your-first-app.md#build-your-app) deployed for a basic iExec application.

## Scone

Scone protects the confidentiality and integrity of the data and the code without needing to modify or recompile the application.

For a deeper understanding, you can have a look to the official [Scone documentation](https://sconedocs.github.io/).

## Gramine

Gramine is able to run unmodified applications inside SGX enclaves, without the toll of manually porting the application to the SGX environment.

For a deeper understanding, you can have a look to the official [Gramine documentation](https://gramine.readthedocs.io/).

## Let's build

<table data-view="cards">
   <thead>
      <tr>
         <th></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
         <th data-hidden data-card-cover data-type="files"></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Build Scone app</td>
         <td><a href="create-your-first-sgx-app.md">create-your-first-sgx-app.md</a></td>
         <td><a href="../../../.gitbook/assets/tee-scone-logo.png">SCONE-logo.png</a></td>
      </tr>
      <tr>
         <td>Build Gramine app</td>
         <td><a href="create-your-first-gramine-app.md">create-your-first-gramine-app.md</a></td>
         <td><a href="../../../.gitbook/assets/tee-gramine-logo.png">gramine.png</a></td>
      </tr>
   </tbody>
</table>