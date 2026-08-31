# utsa-quantum-math.github.io

Site of the quantum mathematics research group in the Department of
Mathematics at The University of Texas at San Antonio.

Live at <https://utsa-quantum-math.github.io>.

- Adding or editing a talk: [CONTRIBUTING.md](CONTRIBUTING.md)
- Architecture, schema, and conventions: [CLAUDE.md](CLAUDE.md)

## Quick start

```
bundle install
bundle exec jekyll serve --livereload
```

Requires Ruby 3.3 (see `.ruby-version`). On macOS install it with Homebrew or
rbenv rather than using the system Ruby.

## Deployment

Pushing to `main` triggers `.github/workflows/build.yml`, which builds with
Jekyll and deploys to GitHub Pages. The same workflow runs nightly so that the
upcoming/past split stays accurate without a push.

Repository settings → Pages → Source must be set to **GitHub Actions**.

Site code is MIT; content is CC BY 4.0. This site is maintained by members of
the group and is not an official publication of the University.
