import mongoose from 'mongoose'
mongoose.Promise = global.Promise

export const connect = () => {
  return mongoose.connect('mongodb://localhost:27107/mongosaad', {
    useMongoClient: true
  })
}
