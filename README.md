# React Class Components Lab

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm start` to run the website on `localhost:3000`
- `npm run test` to run tests

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.

## Instructions

In this lab, you will **refactor** some React function components so that they are React class components.

Run the app using `npm start`. Go to `localhost:3000` in your browser and you will see a very basic social media feed.

Take a look at the components in the `src` folder. You should see `.js`, `.css`, and `.test.js` files for these components:`Ad`, `App`, `ContactList`, `Feed`, and `Post`.

Run the tests with `npm test`. You will notice that each test fails for the same assertion: `<Component /> has been refactored as a class component.`

You can fix that by refactoring each component as a class component!

- Change the code in the existing component file (e.g. `App.js`, `Post.js`). Do not create a new file or rename the file.
- The appearance of the app in your browser should not change.
- All of the tests should pass.
- Don't forget to include the `data-testid` attribute in each component's top level `<div>`. The tests need this!

## Bonus 1

Add an `Profile` section to the social media app.

- It should be as a separate `<Profile />` component.
- It should be a React class component.
- It should include a person's photo, name, and short bio.
- Render the `<Profile />` component from the `<App />` component.
- The `<Profile />` should appear to the right of the `<ContactList />`

## Bonus 2

Refactor the profile page you made in [the React Introduction Lab](https://github.com/joinpursuit/Pursuit-Core-Web-React-Introduction-Lab) so that **all of the components are class components**.

- All components should be React class components (not function components)
- Your lab should still look the same way it did before in the web browser.
- All of the unit tests should pass on your computer.
- All of the unit tests should still pass
