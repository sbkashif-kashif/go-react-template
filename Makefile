GO_VERSION = v1.22.3

.PHONY: server client build-client copy-client-build start

# start the frontend react server
client:
	cd client && pnpm install && pnpm run dev

# start the backend go server
server:
	go run ./cmd/server/main.go

# build the client
build-client:
	cd client && NODE_ENV=production && pnpm run build

# copy client build to public folder
copy-client-build: build-client
	cp -r client/dist/* public/

# build react and start server
start: copy-client-build server