let bodyObject = {
    title :'I have created an issue',
    body: 'Minor bug',
    labels : ['bug', 'minor']
};

let body = JSON.stringify(bodyObject); //{"title":"I have created an issue","body":"Minor bug","labels":["bug","minor"]}


//Resonse from Postman

{
    "url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/871",
    "repository_url": "https://api.github.com/repos/testnakov/test-nakov-repo",
    "labels_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/871/labels{/name}",
    "comments_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/871/comments",
    "events_url": "https://api.github.com/repos/testnakov/test-nakov-repo/issues/871/events",
    "html_url": "https://github.com/testnakov/test-nakov-repo/issues/871",
    "id": 467812730,
    "node_id": "MDU6SXNzdWU0Njc4MTI3MzA=",
    "number": 871,
    "title": "I have created an issue",
    "user": {
        "login": "kaneva91",
        "id": 19758672,
        "node_id": "MDQ6VXNlcjE5NzU4Njcy",
        "avatar_url": "https://avatars3.githubusercontent.com/u/19758672?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kaneva91",
        "html_url": "https://github.com/kaneva91",
        "followers_url": "https://api.github.com/users/kaneva91/followers",
        "following_url": "https://api.github.com/users/kaneva91/following{/other_user}",
        "gists_url": "https://api.github.com/users/kaneva91/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kaneva91/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kaneva91/subscriptions",
        "organizations_url": "https://api.github.com/users/kaneva91/orgs",
        "repos_url": "https://api.github.com/users/kaneva91/repos",
        "events_url": "https://api.github.com/users/kaneva91/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kaneva91/received_events",
        "type": "User",
        "site_admin": false
    },
    "labels": [],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2019-07-14T09:00:57Z",
    "updated_at": "2019-07-14T09:00:57Z",
    "closed_at": null,
    "author_association": "NONE",
    "body": "Minor bug",
    "closed_by": null
}