# User Profiles Advanced

A React-based user profile management application featuring an elegant UI with pleasant background colors, card styling, and user interaction capabilities.

## Demo

Check out the live demo here: [Demo](https://user-profiles-advanced-ochre.vercel.app/)

## Features

- Display user profiles with detailed information including name, email, phone, address, website, and company.
- Pleasant and eye-catching card backgrounds with consistent styling.
- Responsive card layout with consistent heights across different screen sizes.
- User interaction buttons for liking, editing, and deleting profiles.
- Edit user details via a modal form with validation.
- Avatar generation using Dicebear Avataaars API.
- Context API for state management of user data.
- Built with React and Ant Design components for a modern UI.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd user-profiles-advanced
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` (or the port specified) to view the app.

## Project Structure

```
user-profiles-advanced/
├── public/
│   ├── index.html
│   ├── robots.txt
├── src/
│   ├── components/
│   │   ├── UserCard/
│   │   │   ├── UserCard.js
│   │   ├── UserList/
│   │   │   ├── UserList.js
│   │   │   ├── UserList.css
│   ├── context/
│   │   ├── UserContext.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
```

## Technologies Used

- React
- Ant Design
- Dicebear Avataaars API
- Context API for state management
- CSS for styling and layout

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.

---

Enjoy managing your user profiles with a beautiful and functional interface!
