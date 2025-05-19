# Custom Authentication System for Next.js

This authentication system provides a unified approach for handling authentication in both server-side rendering (SSR) and client-side rendering (CSR) contexts in Next.js applications.

## Features

- Token-based authentication with access and refresh tokens
- Cookie storage for secure token management
- Server-side authentication checks via middleware
- Client-side authentication state management
- Protected route components
- TypeScript support

## Usage

### Setup

1. Wrap your application with the `AuthProvider` in your root layout:

```tsx
// app/layout.tsx
import { AuthProvider } from '@/auth';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
```

### Server-Side Authentication

For server components and pages, use the server utilities:

```tsx
// app/dashboard/page.tsx
import { requireAuth } from '@/auth';

export default function DashboardPage() {
  // This will redirect to login if user is not authenticated
  requireAuth();
  
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

For auth pages that should redirect authenticated users:

```tsx
// app/sign-in/page.tsx
import { redirectIfAuthenticated } from '@/auth';

export default function SignInPage() {
  // This will redirect to dashboard if user is already authenticated
  redirectIfAuthenticated();
  
  return (
    <div>
      <h1>Sign In</h1>
      {/* Sign in form */}
    </div>
  );
}
```

### Client-Side Authentication

For client components, use the `useAuth` hook:

```tsx
'use client';

import { useAuth } from '@/auth';

export default function ProfileButton() {
  const { user, isAuthenticated, logout } = useAuth();
  
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div>
      <span>Welcome, {user?.name}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

For protecting client routes:

```tsx
'use client';

import { ProtectedRoute } from '@/auth';

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Settings</h1>
        {/* Settings content */}
      </div>
    </ProtectedRoute>
  );
}
```

### Authentication Actions

Login:

```tsx
'use client';

import { useState } from 'react';
import { useAuth } from '@/auth';

export default function LoginForm() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      // Redirect happens automatically
    } catch (err) {
      // Error is handled by the auth context
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

## Architecture

This authentication system consists of several key components:

1. **Middleware**: Intercepts requests and handles authentication at the edge
2. **Auth Context**: Provides authentication state and methods to components
3. **Token Storage**: Manages secure storage of tokens
4. **Server Utilities**: Functions for server-side authentication checks
5. **Client Components**: Components for route protection

## Security Considerations

- Access tokens are stored in HTTP-only cookies for security
- Refresh tokens are used to obtain new access tokens
- CSRF protection is implemented
- Tokens are validated on both client and server

## Customization

You can customize the authentication system by:

1. Modifying the token storage strategy in `token-storage.ts`
2. Updating the API service in `auth-service.ts` to connect to your backend
3. Extending the user type in `auth.types.ts`
4. Configuring redirect paths in `app.config.ts` 