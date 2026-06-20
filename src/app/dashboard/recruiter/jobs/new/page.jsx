import React from 'react';

import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import PostJobForm from './PostJobFrom';

const PostJobPage = async () => {

    const company = await getLoggedInRecruiterCompany();

    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default PostJobPage;