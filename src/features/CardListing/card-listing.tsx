import React, { useEffect, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { Card } from '../../components/Card/card';
import { NotFound } from '../../components/NotFound/not-found';
import { PokeAPIResource, Pokemon } from '../../types/pokemon';
import { getPokemon } from '../../utils/api/pokeapi';
import { usePokemons } from '../../utils/hooks/pokemons';
import './card-listing.scss';

export interface Props {
    filter: string;
}

export const CardListing = (props: Props) => {
    const { filter } = props;

    const { data, isFetched, isError, error, isLoading } = usePokemons(
        'pokemon',
        {
            limit: '1300',
        },
    );
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const handleError = useErrorHandler();

    useEffect(() => {
        if (isFetched) {
            try {
                filterResults();
            } catch (err) {
                handleError(err);
            }
        }
    }, [isFetched, filter]);

    const filterResults = () => {
        if (data?.length) {
            setPokemons([]);
            const filtered = data
                .filter((item) => {
                    return item.name.includes(filter.toLowerCase());
                })
                .sort((a: PokeAPIResource, b: PokeAPIResource) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    return 0;
                })
                .slice(0, 3);

            filtered.forEach((item) => {
                getPokemon(item.url).then((res: Pokemon) => {
                    setPokemons((prev) => [...prev, res]);
                });
            });
        }
    };

    return (
        <>
            <div className="cards__grid">
                {pokemons.map((item: Pokemon, index: number) => {
                    return <Card key={index} {...item}></Card>;
                })}
            </div>
            {!isLoading && isFetched && pokemons.length === 0 && (
                <div className="cards__grid__empty">
                    <div className="cards__grid__empty__text">
                        <NotFound message="No results found" />
                    </div>
                </div>
            )}
        </>
    );
};
