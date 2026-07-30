import dns from "node:dns";

dns.promises
  .resolveSrv("_mongodb._tcp.cluster0.eh9wlra.mongodb.net")
  .then(console.log)
  .catch(console.error);