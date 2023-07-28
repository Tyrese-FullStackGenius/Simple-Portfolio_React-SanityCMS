# <h1 align="center">✨ Web Portfolio with Sanity</h1></p>

### Screenshot

<p align="center">
<img src="https://user-images.githubusercontent.com/71541409/168511580-0c5a743d-8505-46df-b12a-9d319ab1bb61.png" width="80%" />
</p>

### [Demo](https://tyrese.netlify.app/)

# 💀 Manual Setup

### Clone this repository

### 1) Sanity

1. If you don't have the [Sanity CLI](https://www.sanity.io/docs/getting-started-with-sanity-cli) installed, first run `npm install -g @sanity/cli` to install it globally
2. `npm install && sanity init` in the `/studio` folder
3. During Sanity's initialization, it will warn you to type `Y` and hit `enter`:

```
? The current folder contains a configured Sanity studio. Would you like to reconfigure it? (Y/n)
```

4. When it asks you what dataset configuration to use, go with the `default`
5. Add CORS Origins to your newly created Sanity project (visit: [manage. Sanity.io](https://manage.sanity.io) and go to Settings > API): - Add your Studio URLs **_with_** credentials: `http://localhost:3333` and `[subdomain].sanity.studio` - Add your front-end URLs **_without_** credentials: `http://localhost:3000` and `https://[subdomain].netlify.app`
   > ⚠️ **Important!** <br />For "singleton" documents, like settings sections, the schema uses a combination of `__experimental_actions` and the new [actions resolver](https://www.sanity.io/docs/document-actions). If you are using this outside the official Sanity Starter, you must comment out the `__experimental_actions` line in "singleton" schemas to publish settings for the first time. This is because a singleton is still a document type, and one must exist before it can be edited. If you want to create additional "singleton" schemas, edit the `singletons` array in the following file: `/studio/parts/resolve-actions.js`.

### 2) ReactJs

1. `npm install` in the project root folder on local
2. Create an `.env` file in the project folder, and add the following variables:

```
REACT_APP_SANITY_PROJECT_ID = XXXXXX
REACT_APP_SANITY_TOKEN = XXXXXX
```

3. Update all the `XXXXXX` values. Here's where to find each:

- `REACT_APP_SANITY_PROJECT_ID` - You can grab this after you've initalized Sanity, either from the `studio/sanity.json` file or from your Sanity Manage dashboard
- `REACT_APP_SANITY_TOKEN` - Generate an API token for your Sanity project. Access your project from the Sanity Manage dashboard, and navigate to: "Settings" -> "API" -> "Add New Token" button. Make sure you give `read + write` access!

### ReactJs (Front End)

`npm run start` in the project folder to start the front end locally.

- Your front end should be running on [http://localhost:3000](http://localhost:3000)

### Sanity (Back End)

`sanity start` in the `/studio` folder to start the studio locally.

- Your Sanity Studio should be running on [http://localhost:3333](http://localhost:3333)
  > ⚠️ **Gotcha!** <br />If you did not manually set up your project, the `projectId` in `/studio/sanity.json` will still be set to the default project. Ensure to update this before starting the studio. Otherwise, you will be denied access when trying to access your studio.

<br />

## Contributing

If you have any ideas to make it more interesting, please send a PR or create an issue for a feature request.

# 🤝 License

### [MIT](LICENSE)

> Github [@tyrese](https://github.com/tyrese) &nbsp;&middot;&nbsp;
> Instagram [@tyrese](https://instagram.com/tyrese)
