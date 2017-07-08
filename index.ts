import { Server } from './lib/server'

const PORT = process.env.DOCKER_PORT
const server = new Server()

server.listen(PORT)
  .then(() => console.log(`Server is running on port ${PORT}`))
  .catch((error: Error) => console.log(error.stack))
