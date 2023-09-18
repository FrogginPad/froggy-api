# Tadpole

API for Froggy and other things

## Prereq

You need [Node.js v^16.9.0](https://nodejs.org/en/download/) & [bun](https://bun.sh/docs/installation) installed

## Setup

1. Clone this project `git clone git@github.com:FrogginPad/tadpole.git`
2. Make a [Riot developer account](https://developer.riotgames.com) & Grab the development API key
3. Go to `.env.example`, add your key and change filename to `.env`

    ```js
      RIOT_API_KEY=
    ```

4. Install dependencies: `bun install`
5. Run: `bun dev`
6. Hit [localhost:4000/ping](http://localhost:4000/ping)
