import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import './main.scss';
import PokeRoutes from './routes';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
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
        ,
    </QueryClientProvider>,
);
