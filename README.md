# iExec Documentation

## 📋 Prerequisites

- **Node.js**: Version 22 or higher
- **npm**: Comes bundled with Node.js
- **Vale** (optional): For documentation linting and quality checks

## ⚙️ Configuration

### Documentation Quality with Vale

We use [Vale](https://vale.sh/) to maintain high-quality documentation
standards. Vale checks your writing for clarity, consistency, and adherence to
our style guidelines, helping us maintain a coherent tone of voice, accurate
terminology, and overall editorial quality across the project.

#### Installing Vale

**macOS:**

```bash
brew install Vale/tap/vale
```

**Linux (Snap):**

```bash
snap install vale
```

**Windows:**

```bash
choco install vale
```

#### Running Vale Locally

```bash
# Download and install external configuration sources
vale sync

# Check all documentation files
vale src/

# Check specific files
vale src/get-started/helloWorld/1-overview.md

# Get detailed output
vale --output=line src/

# Generate comprehensive report with statistics
vale --output=line src/ > vale-report.txt 2>&1
```

#### Vale Rules

Our Vale configuration uses the Google & Vale writing style guide, which helps
ensure:

- Clear and concise language
- Consistent terminology
- Professional tone
- Accessibility best practices

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

[![fork-button](/src/public/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation/fork)

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
> - **Documentation Quality**: Vale will automatically check your documentation
>   for style and clarity

### Some conventions

In order to keep the documentation consistent, we have some naming conventions
for input parameters:

- `protectedData`: '0x123abc...',
- `protectedDataAddress`: '0x123abc...',
- `authorizedApp`: '0x456def...',
- `authorizedUser`: '0x789cba...',
- `userAddress`: '0x789cba...',
- `appWhitelist`: '0xba46d6...',
- `owner`: '0xa0c15e...',
- `newOwner`: '0xc5e9f4...',
- `voucherOwner`: '0x5714eB...',
- `renterAddress`: '0x246bdf...'
- `subscriberAddress`: '0x246bdf...'
- `workerpool`: '0xa5de76...'
- `taskId`: '0x7ac398...'

## 🆘 Support

- 📖 [Documentation](https://docs.iex.ec)
- 💬 [Discord Community](https://discord.com/invite/pbt9m98wnU)
- 🐛
  [Issue Tracker](https://github.com/iExecBlockchainComputing/documentation/issues)

## TODO

- Add an audit section for smart contracts
- Adapt hardcoded address to feat with new contracts deployed on arbitrum
- Add link to the new explorer feature Asset_Types in the guide =>
  `handle-schemas-dataset-types`
- Add link to remix for deploying whitelist
- SGX vs TDX need review
- Explorer l'intégration de codeSpace
- Add a Development workflow section (1 - ProtectData, 2- ...)
- Update context7 when doc will be deployed (Martin)
- Check theGraph Images with design Team
- Update the Dune Dashboard to the final version
- Add new section in `iexec-explorer.md` file to talk about: available chain on
  the UI + SRLC/RLC on account section feature of the protocol
- Update or add design illustrations based on the new design system
- Check how to pay guide to update with the launch on Arbitrum (RLC vs xRLC)
- framework AI supporté TDX vs SGX
- check glossary
- migrate github iexec SDK doc here
- migrate pay-per-task page into a guide
- check pages (introduction & getting-started) for use-iapp guide
- Schema what is iexec to do and implement
- explain TDX vs SGX
- Give recap of Workerpool address fo chains
- Talk about ENS on Bellecour(it's not supported on arbitrum)
- Rework Advanced iApp building guides. (from "old" protocol doc)
- Rework src\get-started\protocol\oracle.md (transfer to guide or rewrite)
- Talk about iApp secret
- Improve Guide in build-iapp section - be more clear for builder ( how to
  process process protectedData, clarify input-output guide)
- refactor iapp generator cli reference
