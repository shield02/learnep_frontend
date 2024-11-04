import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./_metronic/assets/sass/style.scss"
import App from './App.tsx'

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
