# blog-jekyll-theme

A lightweight custom Jekyll theme derived from the GitHub Pages "hacker" theme.  
Used for the supaahiro.github.io blog (personal site and posts).

## Features
- Minimal, readable blog layout inspired by the hacker theme
- Responsive header, post layout, and syntax highlighting
- Simple configuration through `_config.yml`
- Easy to fork and customize

## Installation

Two common ways to use this theme in a Jekyll site.

1) As a remote theme (recommended for GitHub Pages)
- Add to your site `_config.yml`:
  theme: supaahiro/blog-jekyll-theme
- Or, if using remote_theme plugin:
  remote_theme: supaahiro/blog-jekyll-theme

2) As a local/theme gem
- Add the gem to your site `Gemfile` and set `theme: blog-jekyll-theme` in `_config.yml`.
- Or copy the theme files into your site's directory (for direct customization).

## Usage

Basic `_config.yml` example:
title: Your Site Title
description: Short description of the site
author: Your Name
theme: supaahiro/blog-jekyll-theme

Place posts under `_posts/` and pages at the site root. The theme provides standard layouts (`default`, `post`, `home`) and includes for header/footer.

## Development

To run the theme locally:
1. Install dependencies:
   - bundle install
2. Serve locally:
   - bundle exec jekyll serve --livereload
Make changes in the theme or a local test site and refresh the browser.

## Customization

Common options to set in `_config.yml`:
- title, description, author
- baseurl, url
- social links (twitter, github)
- show_date: true/false
- show_tags: true/false

Override templates by copying layouts/includes into your site and editing them.

## Credits

This theme is derived from the GitHub Pages "hacker" theme:
https://github.com/pages-themes/hacker

Used by: supaahiro.github.io

## License

See the LICENSE file in this repository for license details.

<!-- Maintainer: supaahiro -->