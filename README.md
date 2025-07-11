# React ToDo List

A modern, responsive to-do list application built with React.

## Features

- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as completed
- ✅ Local storage persistence
- ✅ Responsive design
- ✅ Modern UI with smooth animations
- ✅ FontAwesome icons integration

## Tech Stack

- **React 18** - Modern React with hooks
- **Zustand** - Lightweight state management
- **SCSS** - Advanced CSS with variables and mixins
- **FontAwesome** - Icon library
- **Local Storage** - Data persistence

## Getting Started

### Prerequisites

- Node.js 20.18.0 or higher
- npm 10.8.2 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-todolist
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linting and formatting

## Project Structure

```
src/
├── components/
│   ├── Dashboard/          # Dashboard components
│   ├── Page/              # Page-level components
│   ├── Task/              # Task-related components
│   └── UI/                # Reusable UI components
├── store/
│   └── taskStore.js       # Zustand store for task management
├── assets/
│   ├── data/              # Static data
│   ├── images/            # Images and icons
│   └── scss/              # Stylesheets
└── App.js                 # Main application component
```

## State Management

The application uses Zustand for state management, providing:

- Task CRUD operations
- Local storage persistence
- Reactive updates
- Simple API

## Styling

The project uses SCSS with:

- BEM methodology
- Responsive design with breakpoints
- CSS custom properties
- Modular architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

ISC License
