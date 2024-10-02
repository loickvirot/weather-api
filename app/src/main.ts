import 'dotenv/config'
import createServer from './server/server'

// Launch server
const app = createServer()

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
