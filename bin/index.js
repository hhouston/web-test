import express from 'express'
import { createServer } from '../lib'

const createApp = ({
  host
}) => {
  const app = express()

  const { server, onStart } = createServer({host})

  app.use(server)

  return {
    app,
    onStart
  }
}


if (require.main === module) {
  const port = 9000
  const host = 'http://localhost:9000'

  try {
    console.log('init');
    const { app, onStart } = createApp({host})

    onStart().then(() => {
      app.listen(port, () => {
        console.log('launch server on port ', port)
      })
    }).catch(err => {
      console.log('server fail')
      process.exit(1)
    })
  } catch (err) {
    console.log('init fail')
    process.exit(1)
  }
}
