import React from 'react';

import { Profile } from './Profile/Profile';
import user from '../user';

import { Statistics } from './Statistics/Statistics';
import data from '../data';

import { FriendList } from './FriendList/FriendList';
import friends from '../friends';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
 import transactions from '../transactions';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
           <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <FriendList friends={friends} />
            <TransactionHistory items={transactions} />

    </div>
  );
};
