import React, { createElement } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { AppRouter } from './AppRouter';

// Import fonts
const montserratFont = document.createElement('link');
montserratFont.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
montserratFont.rel = 'stylesheet';
document.head.appendChild(montserratFont);

const interFont = document.createElement('link');
interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap';
interFont.rel = 'stylesheet';
document.head.appendChild(interFont);

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);