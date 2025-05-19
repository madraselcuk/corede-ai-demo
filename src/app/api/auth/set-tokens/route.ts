import { NextRequest, NextResponse } from 'next/server';

const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 30 * 24 * 60 * 60, // 30 days
};

export async function POST(req: NextRequest) {
  try {
    const { accessToken, refreshToken } = await req.json();

    // Create response with success status
    const response = NextResponse.json({ success: true });

    // Set access token cookie
    response.cookies.set(ACCESS_TOKEN_KEY, accessToken, COOKIE_OPTIONS);

    // Set refresh token cookie
    response.cookies.set(REFRESH_TOKEN_KEY, refreshToken, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error('Error setting tokens:', error);
    return NextResponse.json(
      { error: 'Failed to set authentication tokens' },
      { status: 500 }
    );
  }
} 