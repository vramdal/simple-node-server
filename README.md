For å kjøre opp en veldig enkel HTTP-server på localhost som ikke bryr seg med CORS og andre sånne ting man må forholde seg til i virkeligheten.

For å bruke:
1. `git clone https://github.com/vramdal/simple-node-server.git`
2. `cd simple-node-server`
3. `npm install`
3. `./index.mjs --help`

Parametere:

`-p <port>` eller `--port <port>` for å velge port. Default er 8080.

`-d <directory>` eller `--directory <directory>` for å velge hvilken mappe som skal serveres. Default er `./`.
