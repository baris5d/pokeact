// react-query hooks to fetch and cache pokemon data
import React, { useEffect, useMemo, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useQuery } from 'react-query';
import { PokeAPIResource, Pokemon } from '../../types/pokemon';
import { getAllPokemons, getPokemon } from '../api/pokeapi';

export const usePokemons = (endpoint: string, parameters: any) => {
    // get all pokemons from PokeAPI
    return useQuery<PokeAPIResource[], Error>({
        queryKey: ['pokemons', endpoint, parameters],
        queryFn: () => getAllPokemons(endpoint, parameters),
        staleTime: 600000, // 10 minutes
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
};

export const usePokemon = (id: string) => {
    const query = useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => getPokemon(`/pokemon/${id}`),
        staleTime: 600000, // 10 minutes
        refetchOnMount: true,
        refetchOnWindowFocus: true,
    });
    return query;
};
/**
 * usePokemonCollector is a custom hook that returns a pokemon object with
 * properties that are defined in desiredProps. The properties can be nested
 * objects or arrays.
 * @param id - the id of the pokemon object
 * @param desiredProps - an array of strings that define the properties to be
 * returned. The properties can be nested objects or arrays. For example:
 * ['name', 'sprites.front_default', 'moves[].move.name']
 */
export const usePokemonCollector = (id: string, desiredProps: string[]) => {
    const { data, isLoading, isError } = usePokemon(id);

    const handleError = useErrorHandler();

    const [collectedPokemon, setCollectedPokemon] = useState<
        Pokemon | undefined
    >(undefined);

    useEffect(() => {
        const getCollectedPokemon = async () => {
            if (!isLoading && !isError && data) {
                if (desiredProps && desiredProps.length > 0) {
                    const items: any = {};
                    // destruct the desiredProps array and get the data
                    // each prop being destructured is a string that can be nested
                    try {
                        desiredProps.forEach(async (prop) => {
                            const [key, subKey] = prop.split('.'); // split the prop string given [key.subkey]
                            const lookup: any = data[key as keyof typeof data];
                            if (!items[key]) {
                                items[key] = [];
                            }
                            if (lookup && lookup.length > 0) {
                                for (const item of lookup) {
                                    const data = await getPokemon(
                                        item[subKey].url,
                                    );
                                    items[key].push({ [subKey]: data });
                                }
                            }
                        });
                    } catch (err) {
                        handleError(err);
                    }
                    const mergedData = { ...data, ...items };
                    setCollectedPokemon(mergedData);
                }
            }
        };
        getCollectedPokemon();
    }, [data]);

    const collectedProps: any = useMemo(() => {
        if (!isLoading && !isError && data) {
            return desiredProps.reduce((acc, prop) => {
                (acc as any)[prop] = data[prop as keyof typeof data];
                return acc;
            }, {});
        }
    }, [data, isLoading, isError, desiredProps]);

    return { collectedProps, collectedPokemon };
};
