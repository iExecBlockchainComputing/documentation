# iExec Tools documentation

This is the source repository of the [iExec documentation](https://docs.iex.ec)

## Prerequisites

- Node 22

## Configuration

### Environment Variables (Optional)

Some features of the application require environment variables. This
configuration is optional and only needed if you plan to work with Hello World
pages. Create a `.env` file at the root of the project using the provided
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

## Run app

```
npm install
npm run dev
```

## Contributing

To keep the contribution process smooth, please read this small guide.

### Fork

Fork the repo and be sure to be on `main` branch

[![fork-button](./public/fork-button.png)](https://github.com/iExecBlockchainComputing/documentation/fork)

### Contribute

Apply your changes on your forked branch, stage them and commit them with a
descriptive commit message.

Push your changes to your forked branch.

### PR time

Open a pull request from your forked branch to our `main` branch.

> _**Tips:**_  
> You can open a draft pull request and set it to "Ready for review" once you
> are happy with the preview. Opened pull requests will be reviewed by the team
> and merged once approved.
