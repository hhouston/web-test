import express from 'express'

export default () => {
  const app = express()

  app.get('/', (req, res) => {
    res.json('you did it');
  })

  const onStart = async () => {}

  return {
    server: app,
    onStart
  }
}
