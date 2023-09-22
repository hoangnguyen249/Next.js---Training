import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://hoang:W4ZsSZ814w4wEI3u@cluster0.fjizvm1.mongodb.net/auth-demo?retryWrites=true&w=majority'
  );

  return client;
}