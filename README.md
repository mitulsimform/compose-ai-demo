# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Demo

```
[https://copose-ai.netlify.app/](https://copose-ai.netlify.app/)
```

```
[Demo Explaination](https://www.loom.com/share/4bed8730e54f4073a5e407593fb480aa)
```

## Clone Project

```
git clone https://github.com/mitulsimform/compose-ai-demo.git
```

## Install node modules

```
yarn
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

```Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
```

### `yarn run build`

```
This command will create production builds.
```

### Here is the list of predefine command

```js
const  preDefCommand = ['/add:', '/uppercase:']

start message with / an it will show available command to choose from. Because of time limitation, manual typing command will not work as expected.

```

<h2>/add:</h2>

```
This command will add numbers. it will ignore any string.

For ex. : /add: 1 2 3 will result into 6

/add: 1 hello 2 hi 3 demo 4abcs result into 6

```

### Project requirements:

```
Start a message with / an it will show the available command to choose from the suggestion.
```

### Assumptions

```
After typing slash commands, the existing text in textbox will be affected. Newly typed text after executing slash command will not affected.
```

### Limitations

```
User must choose a command from the options; manually entered command will not produce the expected results.
```

### Milestones

```
In the future, we can implement backend support to get command list, And using that we can implement many functionality Like Join group, Start meeting, Open app.
```
