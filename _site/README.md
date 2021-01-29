# Apron-Network

The website of Apron, built with [Jekyll](https://jekyllrb.com/docs/home/).

## News Posts guidelines

### Setup
News posts are placed in `/_i18n/language/_posts/`.

The filename must use the following format:
````
YYYY-MM-DD-title.md
````

Where YYYY is the year (4 digits), MM the month (2 digits), DD the day (2 digits), and .md is the file extension representing the format used in the file. The following are examples of valid post filenames:

````
2021-01-31-Our-fresh-new-website.md
````

The file must start with the following YAML code:
````
---
layout: detail
title: Title of the post
---
````
Optional YAML tags:
* `image:` Path to an image file. Displayed on platforms that support Open Graph Markup. Example format for an internal image: `"/assets/images/posts/community-fund-rewards.jpg"`
* `summary:` Summary of the post content. Displayed on search engine results and platforms that support Open Graph Markup. By default, the first line from post content is used.

### Writing
Markdown is used for rich text formatting, you can find examples [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Build
Run command `bundle install` to install all dependency.
Run command `bundle exec jekyll serve` you will see the website at http://127.0.0.1:4000/
