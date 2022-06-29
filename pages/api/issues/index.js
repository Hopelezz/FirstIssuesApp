// api/issues

import { Octokit } from "octokit";

export default async function handle(req, res) {
    const octokit = new Octokit();
    const q = "is:open is:issue label:good-first-issue"

    const response = await octokit.request("GET /search/issues", { q });
    const results = response.data.items.map((items) => ({
        title: items.title,
        author: items.user.login,
        labels: items.labels.map((label) =>label.name),
        url: items.html_url
    }));

    const random = Math.floor(Math.random() * results.length + 1);

    res.status(200).json(results[random]);
}