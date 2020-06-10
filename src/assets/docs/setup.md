# Setup
This guide will show you how to setup DBots and the dashboard to customize DBots, using your own bot.

**Requirements**:
- NodeJS (bot + webapp)
- MongoDB Server (bot + api)
- Java (bot -> music server)
- Angular (webapp)

## Bot
The backend; made with: TypeScript, ExpressJS

### Bot and Webapp Setup
Guide to setting up DBots, and starting the bot, and precompiled webapp.
This is without webapp customization.

1) `Fork` the [DBots Repo](https://github.com/theADAMJR/DBots), or download it

2) Open the downloaded folder in terminal and type `npm i` to install required packages
  - This is done within the root of the folder
  - `cd [appFolderPath]` (windows/linux)

3) Create `config.json` within the same folder
 - This is also done within the root of the folder
 `config.json` example
 - Remove comments (// comment...)
 - Replace all values to meet your needs

```
{
    "bot": {
        "token": "yourBotToken", // used for bot user login
        "secret": "oauthSecret", // used for webapp login integration
        "id": "discordBotId" // used for webapp login integration
    },
    "api": {
        "url": "https://DBots.xyz/api", // used for xp cards etc.
        "managerPermission": "MANAGE_GUILD" // required permission for managing dashboard ,
        "stripe": { // used for payments/donations
            "apiKey": "stripeAPIKey" // your https://stripe.com/dashboard API key
        }
    },
    "webapp": {
        "url": "https://DBots.xyz", // the URL of the dashboard
        "distPath": "/Documents/Projects/twopg-dashboard/dist/twopg-dashboard" // the compiled webapp; contains index.html (created with 'ng build --prod' in webapp)
    },
    "lavalink": { // used for music server
        "password": "youshallnotpass"
    },
    "tests": { // optional -> used for tests
        "guild": {
            "id": "yourTestGuildId" // used for integration tests
        }
    },
    "mongoURL": "mongodb://localhost/DBots", // database URL (port 27017)
    "modules": ["announce", "auto-mod", "general", "music", "xp"] // enabled modules used for validation in API
}
```

1) Type `mongod` to start the Mongo database server instance

2) Type `npm run start:music` to start the music server instance

3) Type `npm start` to start the bot

#### Notes
- the `dist` folder contains the precompiled dashboard which is the product of `ng build --prod`
- `http://localhost:3000` is the default webapp address