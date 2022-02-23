cd 
mkdir passportDb -p
mongod --bind_ip_all --storageEngine inMemory --dbpath "./passportDb" --port 28006 &