# Todo App Redux (React + Vite)

A modern, responsive Todo application built with React, Redux, and Vite. This project demonstrates state management with Redux, theming, and mobile-friendly design. Users can add, check, and delete todos, and switch between two visually distinct themes.

## Features

- Add, check/uncheck, and delete todo items
- Two unique themes (Theme 1 and Theme 2), each with its own layout and style
- Responsive/mobile-friendly design
- State management with Redux
- Clean, modular code structure

## Technologies Used

- [React](https://react.dev/)
- [Redux](https://redux.js.org/)
- [Vite](https://vitejs.dev/)
- [Sass/SCSS & CSS]
- [React Icons](https://react-icons.github.io/react-icons/)

## Folder Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── theme1-components/
│   │   │   ├── options.component.jsx
│   │   │   ├── todo-item.component.jsx
│   │   │   ├── todo-list.component.jsx
│   │   │   └── todo.component.jsx
│   │   └── theme2-components/
│   │       ├── body.component.jsx
│   │       ├── logo.component.jsx
│   │       └── list-item.component.jsx
│   ├── routes/
│   │   ├── theme1/
│   │   │   ├── theme1.component.jsx
│   │   │   └── theme1.styles.css
│   │   └── theme2/
│   │       ├── theme2.component.jsx
│   │       └── theme2.styles.scss
│   └── store/
│       ├── root.reducer.js
│       ├── store.js
│       └── todo-list/
│           ├── todo-list.action.js
│           ├── todo-list.reducer.js
│           ├── todo-list.selector.js
│           └── todo-list.types.js
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd todo-app-redux
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage

- Add a new todo by typing in the input and clicking "Add".
- Check/uncheck a todo by clicking the checkbox.
- Delete a todo by clicking the trash/delete icon.
- Switch between themes using the theme switcher (if implemented in your UI).
- The app is fully responsive and works well on mobile devices.

## Switching Themes

- Theme 1 and Theme 2 have separate components and styles.
- You can switch themes via the UI (if a switcher is present) or by navigating to the respective route/component in the code.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
