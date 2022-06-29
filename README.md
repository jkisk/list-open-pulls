# list-open-pulls
List open pull requests via GHA

## Inputs

## `token`

**Required**: Github access token to use.

## `owner`

**Required**: Owner of github repo you are accessing, defaults to `jkisk`.

## `repo`

**Required**: Github repo you are accessing, defaults to `list-open-pulls`.

## Outputs

## `title`

Array of titles of open PRs for the specified repo.

## Example usage
```
uses: jkisk/list-open-pulls@v1
with:
  token: ${{ secrets.GITHUB_TOKEN }}
  owner: jkisk
  repo: list open pulls 