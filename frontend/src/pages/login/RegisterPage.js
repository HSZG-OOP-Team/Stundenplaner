import React from 'react';
import { SignUp } from '@clerk/react';

export default function RegisterPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <SignUp routing="path" path="/register" signInUrl="/login" forceRedirectUrl="/dashboard"/>
    </div>
  );
}