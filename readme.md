Kong setup using postgresql
Kong used by click-ops
Both kong and the database are on docker, so necessary docker-compose up
Sample node api used to simulate a returning API


```bash
# for kong and db
docker-compose up
# for sample api, at the node-api folder
npm install
# 
node api.js  // PORT=3000 node api.js
```


Learning notes throughout the test:

#kong adresses

http://localhost:8000    - Entry gateways
http://localhost:8001    - ADMIN API
http://localhost:8002    - ADMIN GUI

#Used sections

plugins: rate limiting, key authentication, JWT

gateway service -> route to it

create upstream for load balancing
gateway service -> route to the upstream