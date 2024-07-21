import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const GITHUB_USERNAME = "Shubham-Patel07"; // Replace with your GitHub username
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// In-memory cache
let cache = {
  totalCommits: 0,
  lastFetch: 0,
};
const CACHE_DURATION = 5 * 24 * 60 * 60 * 1000; // Cache duration in milliseconds (e.g., 5 days)

const fetchTotalCommits = async (username, author) => {
  const headers = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };

  const reposUrl = `https://api.github.com/users/${username}/repos`;
  let totalCommits = 0;

  try {
    console.log("Making request to GitHub API with URL:", reposUrl);
    
    // Fetch all pages of repositories
    let page = 1;
    let repos = [];
    while (true) {
      const response = await axios.get(reposUrl, {
        headers,
        params: { per_page: 100, page },
      });
      repos = repos.concat(response.data);
      if (response.data.length < 100) break;
      page++;
    }

    for (const repo of repos) {
      const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits?author=${author}`;

      try {
        const commitsResponse = await axios.get(commitsUrl, { headers });
        const commits = commitsResponse.data;

        // Filter the commits to count only those authored by you
        const authorCommits = commits.filter(
          (commit) => commit.commit.author.name === author
        );

        totalCommits += authorCommits.length;
        console.log(`Repository: ${repo.name}, Commits: ${authorCommits.length}`);
      } catch (error) {
        console.error(`Error fetching commits for repository ${repo.name}:`, error.message);
        // Continue with the next repository if there's an error
        continue;
      }
    }

    console.log(`Total commits by ${author}: ${totalCommits}`);
    return totalCommits;
  } catch (error) {
    console.error("Error fetching repositories:", error.message);
    return 0;
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    console.log('Received GET request...');
    
    const now = Date.now();
    if (cache.lastFetch && (now - cache.lastFetch < CACHE_DURATION)) {
      console.log('Returning cached result');
      res.status(200).json({ totalCommits: cache.totalCommits });
      return;
    }
    
    const totalCommits = await fetchTotalCommits(GITHUB_USERNAME, GITHUB_USERNAME);
    console.log('Total commits count:', totalCommits);
    
    // Update cache
    cache = {
      totalCommits,
      lastFetch: Date.now(),
    };
    
    res.status(200).json({ totalCommits });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
