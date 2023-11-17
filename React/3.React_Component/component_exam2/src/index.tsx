import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Counter from './Counter';

const rootNode = document.getElementById('root');
const reactRoot = createRoot(rootNode!);

reactRoot.render(<Counter title="Function Component Counter"/>);
