# Elder Scrolls Legends Demo

## Prerequisites

- [NodeJS](https://github.com/nvm-sh/nvm) - v12.18.0

## Running / Testing

```bash
# Installs dependencies
# After this command finishes edit the .env file if needed
yarn

# Runs the app in the development mode
yarn start

# Launches the test runner in the interactive watch mode
yarn test

# Builds the app for production to the `build` folder
yarn build
```

## Deploy to Firebase

`yarn deploy`

---

---

## Key Decisions & Considerations

### Code Quality & Standardization

- I like to be as explicit as possible about required versions and enforce them when possible. Node version 12.18.0 (LTS support) is enforced using .npmrc and engines in package.json
- I like to enforce code quality so I implemented Husky pre-commit hooks that run tests and prettier on commit and enforce eslint rules
- I did ignore certain ESLint rules for the sake of simplicity such as not requiring prop types to be specified
- Any sort of setup requirements are automated as much as possible, so for example I run a post install script that copies the `.env.example` file to `.env`

### State Management

- I went with React Context using useDispatch hook for simplicity
- I kept most state that was shared among components in global state and in general tried to minimize reliance on local state

### Design

- I wanted a good looking design with minimal customization. I chose Bootstrap and [Reactstrap](https://reactstrap.github.io/) because I'm quite familiar with them and they aren't heavy on the codebase when you pull in only the modules you need. I could have just as easily chosen another framework such as Material. In a team setting, this decision would have been made as a team, taking into consideration levels of upskilling needed/desired, how closely the UI framework matches the designs, whether the framework meets performance needs, etc.

### Environment Variables

- I saved various information to ENV variables so they could be kept private from the repo, which is especially useful for API keys (none needed in this project)
- Also this would make the various variables changed easily depending on the deployment environment, ie. different API_URL depending on dev vs staging vs prod environments

### Abstraction

- I attempted to show how I would abstract useful functionality that can be reused throughout the app (see components / hooks)
- I created a custom hook for infinite scroll functionality that can be reused throughout the app

### New Techniques

- I used the [HTML Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to implement infinite scrolling. I've done most of the things in this challenge before, so I want to try something new to learn and upskill myself. At the same time, this API is [supported by most modern browsers](https://caniuse.com/#feat=intersectionobserver). I always like to learn and try something new on a project if it doesn't have any negative impact.

### Testing

- I wrote a few of unit tests for testing rendering, but definitely nowhere near production level, due to time constraints. If I was releasing this to production, I would attempt to get close to 100% test coverage and implement regression tests.
- The written tests exhibit a simplified usage of mocking

### Deployment

- Deployed to Firebase so it would be easy for you guys to view the app. However, instructions for local setup are above.

### If I had more time

- I created very simple filter/search, but if I had more time and if the project justified it I would have introduced a more robust solution possibly using something like elasticsearch
- I would setup caching for the API calls that would be appropriate to how often we'd expect that API to change
- I would implement lazy loading on the card images to improve performance
- I would keep in mind accessibility by creating the right html tags, adding labels to the forms fields, making sure you can tab through the whole app, testing with a screen reader, etc.
- I would create consistency in custom styling rather than using a combination of SCSS files and inline styles
- I would write this in TypeScript if this was a production project and would grow to be relatively large. This would help with debugging, preventing regressions, and make it easier to code with IDE integrations. This is assuming the team knows TypeScript and/or is interested in learning the business can support the learning curve.

### API Concerns

- The API doesn't seem to be consistently returning results
- I think it might also be limiting results to 100 total results, because I cannot get past page 5 on infinite scroll
- Inconsistently it also doesn't let me paginate past page 2 (this happens locally, but not on my hosted version -- some kind of rate limiting maybe)
