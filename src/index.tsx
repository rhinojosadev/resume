/* @refresh reload */
import { render } from 'solid-js/web';
import "./index.css"

import Landing from './pages/Landing';

const root = document.getElementById('root');

render(() => <Landing />, root!);
