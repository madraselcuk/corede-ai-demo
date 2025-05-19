# Authentication System

This folder contains the integrated authentication system that combines Next.js's built-in authentication (Next-Auth) with a custom state management approach using Zustand.

## Overview

The authentication system provides:

1. **Token-based authentication** with access and refresh tokens
2. **Persistent authentication state** across page refreshes
3. **Flexible storage options** (localStorage, sessionStorage, or cookies)
4. **Integration with Next-Auth** for server-side authentication
5. **Custom React hooks** for client-side authentication

## File Structure

- `auth.type.ts` - Type definitions for authentication
- `auth-store.ts` - Zustand store for managing auth state
- `auth-context.ts` - React context for auth state and provider component that manages auth state
- `use-auth.ts` - Hook for accessing auth state
- `index.ts` - Exports for all auth components

## How to Use

### Setup

The authentication system is already set up in the application. It's integrated with Next-Auth in the following files:

- `src/auth.ts` - Next-Auth configuration
- `src/middleware.ts` - Route protection
- `src/providers/session-provider.tsx` - Provider component

### Client-Side Authentication

#### Using the Auth Hook

```tsx
import { useAuth } from '@/auth-session';

function MyComponent() {
  const { authenticated, user, handleSignIn, handleSignOut } = useAuth();

  if (!authenticated) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}
```

#### Manual Sign In

```tsx
import { useAuth } from '@/auth-session';
import { useState } from 'react';

function SignInForm() {
  const { handleSignIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Call your API to get tokens
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Sign in with tokens and user data
      handleSignIn(
        {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
        },
        {
          userId: data.user.id,
          email: data.user.email,
          name: data.user.name,
          role: data.user.role,
        }
      );
    }
  };

  return (
    <form onSubmit={onSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

#### Sign Out

```tsx
import { useAuth } from '@/auth-session';

function SignOutButton() {
  const { handleSignOut } = useAuth();

  return <button onClick={handleSignOut}>Sign Out</button>;
}
```

### Server-Side Authentication

#### In Server Components

```tsx
import { auth } from '@/auth';

export default async function Dashboard() {
  const session = await auth();
  
  if (!session) {
    // Handle unauthenticated state
    return <div>Please sign in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

#### In API Routes

```tsx
import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const session = await auth();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Process authenticated request
  return NextResponse.json({ data: 'Protected data' });
}
```

### Accessing Tokens

#### Client-Side

```tsx
import { useAuth } from '@/auth-session';
import { getAccessToken } from '@/auth-session';

// Using the hook
function ApiCallComponent() {
  const { authenticated, user } = useAuth();
  
  const fetchData = async () => {
    const response = await fetch('/api/data', {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    // Process response
  };
  
  return <button onClick={fetchData}>Fetch Data</button>;
}
```

#### Server-Side

```tsx
import { auth } from '@/auth';

export async function getData() {
  const session = await auth();
  
  if (!session?.accessToken) {
    throw new Error('Not authenticated');
  }
  
  const response = await fetch('https://api.example.com/data', {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
    },
  });
  
  return response.json();
}
```

## Configuration

The authentication system can be configured in `src/configs/app.config.ts`:

```typescript
const appConfig: AppConfig = {
  // ...other config
  accessTokenPersistStrategy: 'localStorage', // 'localStorage', 'sessionStorage', or 'cookies'
};
```

## Token Storage

Tokens are stored according to the `accessTokenPersistStrategy` setting:

- `localStorage` - Tokens persist across browser sessions
- `sessionStorage` - Tokens are cleared when the browser is closed
- `cookies` - Tokens are stored in cookies (useful for SSR)

## Custom Auth Store

If you need direct access to the auth store:

```tsx
import { useSessionUser, useAccessToken, useRefreshToken } from '@/auth-session';

function MyComponent() {
  // Access session state
  const signedIn = useSessionUser((state) => state.session.signedIn);
  const user = useSessionUser((state) => state.user);
  
  // Access tokens
  const { token: accessToken } = useAccessToken();
  
  return <div>{/* Component content */}</div>;
}
```

## Integration with Next-Auth

The authentication system is integrated with Next-Auth to provide a seamless experience. When you sign in using the custom auth system, it also signs in with Next-Auth, and vice versa.

This integration allows you to use Next-Auth's features like:

- OAuth providers (Google, GitHub, etc.)
- Server-side authentication
- Route protection via middleware

While still maintaining the flexibility of the custom auth system for:

- Token management
- Custom user data
- Persistent authentication state
