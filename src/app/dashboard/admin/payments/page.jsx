import TransactionsTable from '@/components/dashboard/TransactionsTable';
import { createSubscription } from '@/lib/actions/subscriptions';

import React from 'react';

const TransactionPage = async () => {

 const transactions = await createSubscription();


// Call the function to get the transactions
    return (
        <div>
            hey this is payments{transactions.email}
            <TransactionsTable transactions={transactions} />
        </div>
    );
};

export default TransactionPage;