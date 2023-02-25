import React from 'react';
import { waitFor } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import {
    QueryClient,
    QueryClientProvider,
    QueryObserverSuccessResult,
} from 'react-query';
import * as hooks from './pokemons';
import { mockData } from './mock.data';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const wrapper = (children: React.ReactNode) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
export default wrapper;

describe('usePokemons', () => {
    let queryClient: QueryClient;

    beforeAll(() => {
        queryClient = new QueryClient();
    });

    it('returns a useQuery hook instance', () => {
        const endpoint = 'endpoint';
        const parameters = { limit: 20 };
        const { result } = renderHook(
            () => hooks.usePokemons(endpoint, parameters),
            {
                wrapper: ({ children }: { children: React.ReactElement }) => (
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                ),
            },
        );
        expect(result.current.isSuccess).toBeDefined();
        expect(result.current.isLoading).toBeDefined();
        expect(result.current.isError).toBeDefined();
        expect(result.current.refetch).toBeDefined();
    });
});

describe('usePokemonCollector', () => {
    let queryClient: QueryClient;

    beforeEach(() => {
        queryClient = new QueryClient();
        const mockUsePokemon = jest.fn(() => ({
            data: mockData,
            isLoading: false,
            isError: false,
        }));

        // mock the usePokemon hook to return the mock data
        jest.spyOn(hooks, 'usePokemon').mockImplementation(
            mockUsePokemon as any,
        );

        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useMemo: jest.fn(),
        }));
    });

    it('should return the collected pokemon data', () => {
        // render the hook with the wrapper to provide the query client context
        const { result } = renderHook(
            () => hooks.usePokemonCollector('1', ['types.type']),
            {
                wrapper: ({ children }: { children: React.ReactElement }) => (
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                ),
            },
        );

        expect(result.current.collectedPokemon).toEqual(mockData);
    });
});
