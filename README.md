# Micro Blog React App

This is a simple React application that allows you to add and delete post, watch list of all posts that have been added, watch post detail page and delete post.

There are three page available `Home`, `New Post` and `About`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
<!-- - [Contributing](#contributing)
- [License](#license) -->

## Installation

To run this project on your local machine, follow these steps:

1. Clone this repository using command: `git clone https://github.com/Volodymyr-Branets/micro_blog_react_app.git`

2. Install all dependencies using command: `npm install`

3. Run `json-server` at `port:8000` usin command: `npx json-server --watch api/data.json --port 8000`

4. Start app using command: `npm start`

## Usage

- On the `Home` page you will see list of all posts that are on "Data Base" which is on the path `api/data.json`

- By clicking on some post you will redirect to `Post detail` page. There you can delete the post by click `DELETE` button.

- You can add new posts from page `New Post` by filling out the form there and click `ADD POST` button.
