import { Suspense, lazy } from 'solid-js';
import type { Component } from 'solid-js';
import { AppLoading } from '@/components';

const AppContent = lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./Demo');
});

const App: Component = () => {
  const appTitle = import.meta.env.VITE_APP_TITLE;

  return (
    <Suspense fallback={<AppLoading title={appTitle} />}>
      <AppContent />
    </Suspense>
  );
};

export default App;
