#kong adresses

http://localhost:8000    - Entry gateways
http://localhost:8001    - ADMIN API
http://localhost:8002    - ADMIN GUI

Notes

plugins: rate limiting, key authentication, JWT

gateway service -> route to it

create upstream for load balancing
gateway service -> route to the upstream