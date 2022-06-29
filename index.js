const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    const myToken = core.getInput("token");
    const owner = core.getInput("owner");
    const repo = core.getInput("repo");

    const octokit = github.getOctokit(myToken)

    const { data: pullRequests } = await octokit.request('GET /repos/{owner}/{repo}/pulls?state=open', {
        owner,
        repo,
    });
    let titles = []
    for (let el of pullRequests) {
        titles.push(el.title)
    }
    core.setOutput("titles", titles);
}

run();
