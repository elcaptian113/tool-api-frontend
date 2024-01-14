import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddTools from './pages/AddTools';
import ViewTools from './pages/ViewTools';
import UpdateTool from './pages/UpdateTool';
import DeleteTool from './pages/DeleteTool';
import UpdatePage from './pages/Update';

import NavigationBar from './components/navigation/NavigationBar';


function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route index element={<ViewTools />} />
          <Route path="add" element={<AddTools />} />
          <Route path="updatePage" element={<UpdatePage />} />
          <Route path="update">
            <Route path=":toolId" element={<UpdateTool />} />
          </Route>
          <Route path="delete" element={<DeleteTool />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
