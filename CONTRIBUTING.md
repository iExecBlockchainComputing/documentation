# Contributing Guide - iExec Documentation

Welcome to the iExec documentation contribution guide! This guide explains how
to effectively participate in the development and improvement of the
documentation.

## 📋 Prerequisites

- **Node.js**: Version 22 or higher
- **npm**: Comes bundled with Node.js
- **Git**: For version control
- **Vale** (optional): For documentation quality checks

## 🚀 Quick Start

### 1. Initial Setup

1. **Fork the repository**:
   [![fork-button](/src/public/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation/fork)

2. **Clone your fork**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/documentation.git
   cd documentation
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

### 2. Contribution Workflow

1. **Create a branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**

3. **Test locally**:

   ```bash
   npm run dev
   ```

4. **Commit your changes**:

   ```bash
   git add .
   git commit -m "Add: description of your changes"
   ```

5. **Push to your fork**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**

## 🧱 Component Usage Guide

### Container - VitePress Native Containers (Recommended)

**We recommend using VitePress native container syntax** instead of the Vue
component for better compatibility and simplicity.

#### Preferred Usage (VitePress Native)

```markdown
::: info Your informational content here... :::

::: tip Helpful tips and suggestions... :::

::: warning Important warnings and cautions... :::

::: danger Critical warnings and error messages... :::
```

#### Alternative Usage (Vue Component)

The `Container` component extends VitePress default containers with additional
styling, but should only be used when you need specific custom behavior:

```vue
<Container variant="success" title="Success">
Your content here...
</Container>

<Container variant="info" title="Information">
Informational content...
</Container>

<Container variant="danger" title="Warning">
Warning message...
</Container>
```

#### Available Variants

- `success`: Success style with green border
- `info`: Informational style (default)
- `danger`: Warning style with red border

### Banner - Stylized Page Headers

The `Banner` component is perfect for creating attractive page headers with
gradient styling.

#### Usage

```vue
<Banner>

## Your Section Title

Description of your section with elegant styling.

</Banner>
```

#### Features

- Automatic gradient background
- Rounded borders
- Optimized for h2 titles
- Responsive and accessible

### CardWithBorder - Cards with Border

Use this component to create cards with defined borders and soft backgrounds.

#### Usage

```vue
<CardWithBorder>

### Card Title

Your card content with border. Ideal for highlighting important information.

- Point 1
- Point 2
- Point 3

</CardWithBorder>
```

#### Features

- Defined border with theme colors
- Soft background
- Generous padding (2rem)
- Rounded corners

### CardWithoutBorder - Borderless Cards

For more subtle cards without visible borders.

#### Usage

```vue
<CardWithoutBorder>

### Card Content

This card has no border but maintains a soft background for readability.

</CardWithoutBorder>
```

#### Features

- No visible border
- Soft background to contrast with page
- Moderate padding (1.5rem)
- Minimalist style

## 📝 Component Best Practices

### 1. When to Use Each Component

- **VitePress Containers** (`::: info`, `::: tip`, etc.): **Preferred** for
  notes, warnings, and informational messages
- **Banner**: For important section headers
- **CardWithBorder**: To highlight important content
- **CardWithoutBorder**: To group content subtly
- **Container Component**: Only when you need the specific "success" variant not
  available in VitePress native containers

### 2. Combined Usage Example

````markdown
<Banner>

## Installation Guide

</Banner>

::: info Prerequisites Make sure you have Node.js installed before continuing.
:::

<CardWithBorder>

### Step 1: Installation

\```bash npm install \```

</CardWithBorder>

<CardWithoutBorder>

### Step 2: Configuration

Create your `.env` file based on `.env.example`.

</CardWithoutBorder>

::: tip Success! Your installation is now complete! :::
````

## 📚 Project Structure

### File Organization

```
src/
├── components/           # Reusable Vue components
├── get-started/         # Getting started guides
├── guides/              # Detailed guides
├── protocol/            # Protocol documentation
├── references/          # API references
└── assets/              # Images and resources
```

### Naming Conventions

To maintain consistency, use these parameter names:

- `protectedData`: '0x123abc...'
- `protectedDataAddress`: '0x123abc...'
- `authorizedApp`: '0x456def...'
- `authorizedUser`: '0x789cba...'
- `userAddress`: '0x789cba...'
- `appWhitelist`: '0xba46d6...'
- `owner`: '0xa0c15e...'
- `newOwner`: '0xc5e9f4...'
- `renterAddress`: '0x246bdf...'
- `subscriberAddress`: '0x246bdf...'
- `workerpool`: '0xa5de76...'
- `taskId`: '0x7ac398...'

### Commit Message Conventions

Follow these patterns for commit messages:

- `Add: new feature or content`
- `Update: modify existing content`
- `Fix: correct errors or issues`
- `Remove: delete obsolete content`
- `Docs: documentation-only changes`

Examples:

```
Add: CardWithBorder component usage guide
Update: VitePress container recommendations
Fix: broken links in getting started guide
```

## ✅ Documentation Quality with Vale

### Vale Installation

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

### Using Vale

```bash
# Download external configurations
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

Vale checks for:

- Language clarity and conciseness
- Terminology consistency
- Professional tone
- Accessibility best practices

## 🔧 Environment Variables (Optional)

To work with Hello World pages, create a `.env` file:

```bash
cp .env.example .env
```

Fill with your values:

```env
VITE_REOWN_PROJECT_ID=your_project_id_here
```

### Getting your VITE_REOWN_PROJECT_ID

1. Go to [https://dashboard.reown.com/](https://dashboard.reown.com/)
2. Create an account if necessary
3. Click "Create Project"
4. Fill in project information
5. Copy the "Project ID" to your `.env`

## 🐛 Testing and Validation

### Local Testing

```bash
# Build the project
npm run build

# Check syntax
npm run lint

# Documentation tests with Vale
vale src/
```

### Before Submitting

- [ ] Development server runs without errors
- [ ] Vale reports no critical errors
- [ ] All links work
- [ ] Components display correctly
- [ ] Content is accessible and responsive

## 🆘 Support and Help

- 📖 [Documentation](https://docs.iex.ec)
- 💬 [Discord Community](https://discord.com/invite/pbt9m98wnU)
- 🐛
  [Issue Tracker](https://github.com/iExecBlockchainComputing/documentation/issues)

## 💡 Tips for Contributors

1. **Read existing documentation** before contributing to understand the style
   and structure
2. **Always test locally** before submitting a PR
3. **Use appropriate components** to maintain visual consistency
4. **Write descriptive commit messages**
5. **Ask for help** if you're unsure about something
6. **Prefer VitePress native containers** (`::: info`, `::: tip`, etc.) over Vue
   components when possible

Thank you for contributing to improve the iExec documentation! 🎉
