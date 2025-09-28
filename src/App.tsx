import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import AgentSuggestions from './pages/AgentSuggestions';
import CallAssistant from './pages/CallAssistant';
import Wellness from './pages/Wellness';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/suggestions" element={<AgentSuggestions />} />
          <Route path="/call-assistant" element={<CallAssistant />} />
          <Route path="/wellness" element={<Wellness />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;