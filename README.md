# todos

A simple task management application built with React and TypeScript.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Welcome to the todos project! This is a straightforward task management application designed to help users organize and keep track of their to-do lists efficiently. Whether you're a developer looking for a sample project or an end-user seeking a minimalistic task manager, todos has got you covered.

## Features

- **User-friendly Interface:** Clean and intuitive design for a seamless user experience.
- **Task Creation:** Easily add, and delete tasks.
- **Category Tags:** Assign categories to tasks for better organization.
- **Search Functionality:** Quickly find tasks using the search feature.
- **Responsive Design:** Accessible on various devices for convenience.

## Installation

To run todos locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Itodo-S/todos.git

2. Navigate to the project directory:
   cd todos

3. Install dependencies:
   npm install

4. Start the application:
   npm run dev

5. Open your browser and visit http://localhost:3000 to use Todos.

# Usage

Once the application is running, follow these steps to get started:

Open the application in your preferred web browser.
Add tasks using the "Add Task" button.
Adding a category is optional.
Use categories to filter tasks.
Search for specific tasks using the search bar.


# License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
