# iExec Documentation

## 📋 Prerequisites

- **Node.js**: Version 22 or higher
- **npm**: Comes bundled with Node.js

## ⚙️ Configuration

### Environment Variables (Optional)

Some features of the application require environment variables. This
configuration is optional and only needed if you plan to work with Hello World
pages.

Create a `.env` file at the root of the project using the provided
`.env.example` as a template:

```bash
cp .env.example .env
```

Then fill in the required values:

```env
VITE_REOWN_PROJECT_ID=your_project_id_here
```

#### Getting your VITE_REOWN_PROJECT_ID

To obtain your `VITE_REOWN_PROJECT_ID`, follow these steps:

1. Go to [https://dashboard.reown.com/](https://dashboard.reown.com/)
2. Create an account if you don't have one already
3. Once logged in, click on "Create Project" or "New Project"
4. Fill in your project information:
   - Project name
   - Description (optional)
   - Website URL (optional)
5. Once the project is created, copy the "Project ID" displayed in the project
   details
6. Paste this ID in your `.env` file as the value for `VITE_REOWN_PROJECT_ID`

## 🚀 Getting Started

### Installation

Install the project dependencies:

```bash
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

The documentation site will be available at `http://localhost:3000` (or the port
shown in your terminal).

### Building for Production

To build the project for production:

```bash
npm run build
```

## 🤝 Contributing

We welcome contributions to improve the iExec documentation! Please follow these
steps to contribute:

### 1. Fork the Repository

Fork this repository and ensure you're working on the `main` branch:

[![fork-button](./src/public/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation/fork)

### 2. Set Up Your Development Environment

1. Clone your forked repository:

   ```bash
   git clone https://github.com/YOUR_USERNAME/documentation.git
   cd documentation
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### 3. Make Your Changes

1. Create a new branch for your feature/fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes to the documentation
3. Test your changes locally to ensure they work as expected

### 4. Submit Your Changes

1. Stage and commit your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "Add: descriptive commit message"
   ```

2. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a pull request from your feature branch to our `main` branch

### 5. Review Process

> **💡 Tips:**
>
> - You can open a draft pull request and mark it as "Ready for review" once
>   you're satisfied with the preview
> - All pull requests are reviewed by our team before being merged
> - Feel free to ask questions in the pull request if you need clarification

## 🆘 Support

- 📖 [Documentation](https://docs.iex.ec)
- 💬 [Discord Community](https://discord.com/invite/pbt9m98wnU)
- 🐛
  [Issue Tracker](https://github.com/iExecBlockchainComputing/documentation/issues)

## TODO

- Add an audit section for smart contracts
- Add Arbitrum support
- On arbitrum hide : DataProtector Sharing ??
- Adapt hardcoded address to feat with new contracts deployed on arbitrum
- Add link to the new explorer feature Asset_Types in the guide =>
  `handle-schemas-dataset-types`
- Add link to remix for deploying whitelist
- Move `manage-data/dataProtector/advanced/iApp` (Deserializer doc) in an other
  way to be more visible (may in build-iApp section)
- complete `use-iapp` section
- complete `explorer` section
- Maybe split input and output in two diff sub section in build your iapp guide
- SGX vs TDX need review
- Explorer l'intégration de codeSpace
- complete `build-iapp` section
- complete `Protocol`section
- What about Bridge ?
- Made a page on RLC
- Add Dune dashboard
- Add a Development workflow
- Update context7 when doc will be deployed
- Check theGraph Images with design Team
