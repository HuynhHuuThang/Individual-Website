## **Architecture Portfolio Frontend**

This is a modern architecture portfolio website built with React and TypeScript.

### **Project Structure**
```
/frontend-app/
    /src/
        /components/       # Reusable UI components
        /pages/            # Page-level components
        /services/         # API calls (e.g., Axios services)
        /hooks/            # Custom React/Vue/Angular hooks
        /context/          # Global state management
        /utils/            # Helper functions
        /assets/           # Static files (images, icons, etc.)
    /public/               # Public assets like index.html
    /tests/                # Unit & integration tests
    /styles/               # CSS, SCSS, Tailwind, etc.
    .gitignore
    package.json
    Dockerfile
    README.md
```

### **Getting Started**

1. **Install dependencies**
   ```
   npm install
   ```

2. **Run the development server**
   ```
   npm start
   ```

3. **Build for production**
   ```
   npm run build
   ```

### **Features**
- Responsive design
- Modern UI with smooth animations
- Project showcase with image grid
- TypeScript for type safety

### **Technologies Used**
- React 18
- TypeScript 4.9
- CSS3
- Modern JavaScript (ES6+)

### **Dependencies**
This project uses up-to-date dependencies to avoid deprecated packages:
- Updated Babel plugins using transform plugins instead of proposal plugins
- Latest web-vitals library (v3.5.2)
- Updated React type definitions
- Modern ESLint configuration

### **Customization**
You can replace the images in the `src/assets/img` folder with your own architecture project images. Make sure to maintain the same file names or update the imports in the components.
