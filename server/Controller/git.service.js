import fetch from "node-fetch";
import redis from 'redis'

const client = redis.createClient(process.env.REDIS_PORT)
await client.connect();

export const fetchUserDetails = async (req, res) => {
  let {username} = req.query;
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json()
  const totalRepos = data.public_repos;

  // setup redis
  client.set(username, totalRepos, (err, result) => {
    if (err) {
      console.error("Error setting value:", err);
    } else {
      console.log("Value set successfully:", result);
    }
  
    // Close the client when done with operations
    client.quit();
  });
  res.send({
    data: totalRepos
  })
} 

