import axios from 'axios';

var baleineBotApi = axios.create({
  baseURL: 'https://www.reddit.com/r'
});

async function getRedditthreads(currency) {
  const threads = await baleineBotApi.get(`/${currency}/.json`);
  return threads.data.data.children;
}

export default getRedditthreads;
