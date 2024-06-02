# CGC Major Project - MERN Stack Website
### ListifyMarket

![Website](https://raw.githubusercontent.com/Rizwanishere/CGC-CodeCrafters/main/assets/ListifySS.jpg)

### A Website with 3 api's
1. Fakestoreapi (https://fakestoreapi.com/products)
2. My nodeJS api (https://github.com/Rizwanishere/cgc-nodeJS)
3. My todo list api (https://github.com/Rizwanishere/cgc-todo-list) 
# React 
- React is a JavaScript library for building user interfaces based on components.

# React Setup
- ```npm create vite@latest```
- Enter project-name
- Select React 
- Select JavaScript
- ```cd project-name ```
- ```npm install```
- ```npm run dev```

# Tailwind Integration
1. ```npm install -D tailwindcss postcss autoprefixer```
2. ```npx tailwindcss init -p```
3. Add in tailwind.config.cjs file's content section
- ```"./index.html","./src/**/*.{js,ts,jsx,tsx}"```
4. Add the statements below to your ./src/index.css file:
- @tailwind base;
- @tailwind components;
- @tailwind utilities;
5. import './index.css'; in main.jsx

# Install libraries & packages
1. ```npm i axios```
2. ```npm i react-icons```
3. ```npm i react-router-dom```
4. ```npm install --save react-toastify```

# Integrated Stripe payment gateway
1. ```npm install @stripe/react-stripe-js@^2.7.1```
2. ```npm install @stripe/stripe-js@^3.4.1```