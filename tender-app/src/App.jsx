import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import AuthorityLayout from './layouts/AuthorityLayout';
import AuthorityDashboard from './pages/authority/Dashboard';
import CreateTender from './pages/authority/CreateTender';
import ActiveTenders from './pages/authority/ActiveTenders';
import Evaluations from './pages/authority/Evaluations';
import VendorLayout from './layouts/VendorLayout';
import VendorDashboard from './pages/vendor/Dashboard';
import FindTenders from './pages/vendor/FindTenders';
import Applications from './pages/vendor/Applications';
import Payments from './pages/vendor/Payments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuditLog from './pages/AuditLog';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Authority Routes */}
                <Route path="/authority" element={<AuthorityLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<AuthorityDashboard />} />
                    <Route path="create-tender" element={<CreateTender />} />
                    <Route path="active-tenders" element={<ActiveTenders />} />
                    <Route path="evaluations" element={<Evaluations />} />
                </Route>

                {/* Vendor Routes */}
                <Route path="/vendor" element={<VendorLayout />}>
                    <Route index element={<Navigate to="dashboard" replace />} />
                    <Route path="dashboard" element={<VendorDashboard />} />
                    <Route path="tenders" element={<FindTenders />} />
                    <Route path="applications" element={<Applications />} />
                    <Route path="payments" element={<Payments />} />
                </Route>

                <Route path="/audit" element={<AuditLog />} />
            </Routes>
        </Router>
    );
}

export default App;
