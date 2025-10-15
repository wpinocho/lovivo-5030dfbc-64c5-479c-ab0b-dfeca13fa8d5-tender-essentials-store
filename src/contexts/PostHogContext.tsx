import React, { createContext, useContext, useEffect } from 'react';
import posthog from 'posthog-js';
import { POSTHOG_KEY, STORE_ID } from '@/lib/config';

interface PostHogContextType {
  initialized: boolean;
}

const PostHogContext = createContext<PostHogContextType | undefined>(undefined);

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = React.useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && POSTHOG_KEY) {
      posthog.init(POSTHOG_KEY, {
        api_host: '/ingest',
        ui_host: 'https://us.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
        capture_pageleave: true,
        autocapture: false,
      });
      
      // Asociar todos los eventos al grupo 'store' con Group Analytics
      posthog.group('store', STORE_ID);
      
      setInitialized(true);
      console.log('PostHog initialized with group analytics for store:', STORE_ID);
    }
  }, []);

  return (
    <PostHogContext.Provider value={{ initialized }}>
      {children}
    </PostHogContext.Provider>
  );
}

export function usePostHog() {
  const context = useContext(PostHogContext);
  if (context === undefined) {
    throw new Error('usePostHog must be used within a PostHogProvider');
  }
  return context;
}
