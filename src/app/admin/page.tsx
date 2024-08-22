'use client'

import dynamic from 'next/dynamic';

// Dynamically import AdminPanel to prevent server-side rendering issues
const AdminPanel = dynamic(() => import('../components/AdminPanel'), { ssr: false });

const AdminPage = () => <AdminPanel />;

export default AdminPage;
