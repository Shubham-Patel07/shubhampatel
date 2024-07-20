// pages/api/githubPullRequests.js

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GITHUB_USERNAME = 'Shubham-Patel07'; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const getMergedPullRequests = async (username) => {
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
  };

  const url = `https://api.github.com/search/issues?q=author:${username}+is:pr+is:merged`;

  try {
    console.log('Making request to GitHub API with URL:', url);
    const response = await axios.get(url, { headers });
    return response.data.total_count;
  } catch (error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
    } else {
      console.error('Error message:', error.message);
    }
    return 0;
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    console.log('Received GET request...');
    const mergedPullRequestsCount = await getMergedPullRequests(GITHUB_USERNAME);
    console.log('Merged pull requests count:', mergedPullRequestsCount);
    res.status(200).json({ mergedPullRequestsCount });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
