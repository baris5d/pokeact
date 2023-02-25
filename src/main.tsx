import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import './main.scss';
import PokeRoutes from './routes';

const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <ErrorBoundary
            FallbackComponent={({ error }) => {
                return (
                    <div>
                        <h1>An error occurred: {error.message}</h1>
                    </div>
                );
            }}
        >
            <PokeRoutes />
        </ErrorBoundary>
    </QueryClientProvider>,
);
