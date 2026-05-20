import React from 'react';
import { SignIn } from '@clerk/react';

export default function LoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Clerk weiß hier genau: Wenn man unten auf "Registrieren" klickt, geht es zu /register */}
      <SignIn routing="path" path="/login" signUpUrl="/register" forceRedirectUrl="/dashboard"/>
    </div>
  );
}