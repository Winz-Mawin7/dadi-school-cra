import React, { useState, version } from 'react';
import { Button, DatePicker, message } from 'antd';

import './index.css';

import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className='container pl-12 '>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
        <div className='flex-shrink-0'>
          <img className='h-12 w-12' src={logo} alt='ChitChat Logo' />
        </div>
        <div>
          <div className='text-xl font-medium text-black'>ChitChat</div>
          <p className='text-gray-500'>You have a new message!</p>
        </div>
      </div>
      <div className='App'>
        <h1>antd version: {version}</h1>
        <DatePicker />
        <Button type='primary' style={{ marginLeft: 8 }}>
          Primary Button
        </Button>
      </div>
    </div>
  );
};

export default App;
