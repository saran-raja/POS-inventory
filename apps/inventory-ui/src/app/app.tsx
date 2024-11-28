import styled from 'styled-components';

import NxWelcome from './nx-welcome';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Login,Register} from '@pos-inventory/libs';
const StyledApp = styled.div``;

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
