import React from 'react';
import { SignUp } from '@clerk/react';

export default function RegisterPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Clerk weiß hier genau: Wenn man unten auf "Anmelden" klickt, geht es zurück zu /login */}
      <SignUp routing="path" path="/register" signInUrl="/login" forceRedirectUrl="/dashboard"/>
    </div>
  );
}