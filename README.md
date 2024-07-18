# CypherGuard Webapp

This is the webapp for CypherGuard, a password manager that uses a combination of AES encryption and PGP encryption to store your passwords securely.

## Installation

To install the webapp, you need docker and docker-compose installed on your machine. Then, you can run the following command:

```bash
pnpm install
docker-compose up -d
```

This will start the webapp on port 3000.

## ENV Variables

| Variable         | Default value         |
|------------------|-----------------------|
| Variable         | Default Value         |
| VITE_BACKEND_URL | http://localhost:8080 | 
| VITE_PORT        | 3000                  |
| VITE_HTTPS       | false                 |

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)
- [i18next](https://www.i18next.com/)
- [react-i18next](https://react.i18next.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [pnpm](https://pnpm.io/)
- [Node.js](https://nodejs.org/)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [husky](https://typicode.github.io/husky/)
- Some other libraries

## How webapp works

The webapp is a simple React app that uses Vite as a bundler. It uses Chakra UI for the design and React Query for data fetching. The webapp connects to the backend API to fetch the data and display it to the user. The user can create, read, update, and delete passwords using the webapp. The webapp uses React Hook Form for form validation and React Router for routing.

### Files

The entry point of the webapp is `src/main.tsx`. The webapp has the following components:

- `App.tsx`: The main component of the webapp that contains the routing logic.
- `/routes/index.tsx`: The routes of the webapp.
- `/routes/*.tsx`: The components for each route.
- `/components/*.tsx`: The reusable components of the webapp.
- `/hooks/*.tsx`: The custom hooks of the webapp.
- `/utils/*.ts`: The utility functions of the webapp.
- `/types/*.ts`: The types of the webapp.
- `/store/*.ts`: The store of the webapp.

Some of the folder dont actually exist, but they are there to show the structure of the webapp.

### 

## Contributing

If you want to contribute to the webapp, you can fork the repository and create a pull request. You can also create an issue if you find a bug or have a feature request.

## Support

If you need help with the webapp, you can contact me.

