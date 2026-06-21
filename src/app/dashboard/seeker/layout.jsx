import { requireRole } from '@/lib/core/session';
import React from 'react';

const SeekerLayout = async({children}) => {
    await requireRole('seeker'); // Only allow seekers to access this layout and its nested routes
    return children;
};

export default SeekerLayout;