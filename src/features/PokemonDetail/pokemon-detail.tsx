import Color from 'color-thief-react';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Image } from '../../components/Image/image';
import { PokemonDetailStats } from '../../components/PokemonStats/pokemon-stats';
import { PokemonTypes } from '../../components/PokemonTypes/pokemon-types';
import { PokemonType, TypeIcon } from '../../components/TypeIcon/type-icon';
import {
    dmToFtAndIn,
    findProperImage,
    formatNumber,
    hgToKg,
    kebabCaseToTitleCase,
    useOppositeColor,
} from '../../utils/helpers';
import { usePokemonCollector } from '../../utils/hooks/pokemons';
import './pokemon-detail.scss';

export const PokemonDetail = () => {
    const { pokemonId } = useParams();
    const navigate = useNavigate();

    const { collectedPokemon } = usePokemonCollector(pokemonId!, [
        'types.type',
        'abilities.ability',
    ]);

    const goBack = () => {
        navigate('/');
    };

    return (
        <div className="pokemon-detail">
            {Object.keys(collectedPokemon).length && (
                <Color
                    src={findProperImage(collectedPokemon.sprites)}
                    format="hex"
                    crossOrigin="Anonymous"
                    key={collectedPokemon.id}
                >
                    {({ data, loading, error }) => {
                        if (data) {
                            return (
                                <div
                                    className="pokemon-detail__wrapper"
                                    style={{
                                        backgroundColor: data,
                                        color: useOppositeColor(data),
                                    }}
                                >
                                    <div className="pokemon-detail__image">
                                        <Image
                                            src={findProperImage(
                                                collectedPokemon.sprites,
                                            )}
                                            alt={collectedPokemon.name}
                                        />
                                    </div>
                                    <div className="pokemon-detail__info">
                                        <h2>
                                            <span className="bold">
                                                #
                                                {formatNumber(
                                                    collectedPokemon.id.toString(),
                                                )}
                                            </span>
                                        </h2>
                                        <h1 className="poke_name">
                                            {kebabCaseToTitleCase(
                                                collectedPokemon.name,
                                            )}
                                        </h1>
                                        <div className="pokemon-detail__types-wrapper">
                                            {collectedPokemon.types.map(
                                                (item, index) => {
                                                    return (
                                                        <div
                                                            className="pokemon-detail__types"
                                                            key={index}
                                                        >
                                                            <TypeIcon
                                                                type={`${
                                                                    item.type
                                                                        .name as PokemonType
                                                                }`}
                                                                className={`pokemon-detail__types-item`}
                                                                size={128}
                                                            />
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                        <div className="pokemon-detail__description">
                                            <p>
                                                <span className="bold">
                                                    Height:
                                                </span>{' '}
                                                {dmToFtAndIn(
                                                    collectedPokemon.height,
                                                )}
                                            </p>
                                            <p>
                                                <span className="bold">
                                                    Weight:
                                                </span>{' '}
                                                {hgToKg(
                                                    collectedPokemon.weight,
                                                )}
                                            </p>
                                        </div>
                                        <PokemonDetailStats
                                            stats={collectedPokemon.stats}
                                            color={data}
                                        />

                                        {[
                                            'double_damage_to',
                                            'double_damage_from',
                                        ].map((prop, index) => {
                                            return (
                                                <PokemonTypes
                                                    types={
                                                        collectedPokemon.types
                                                    }
                                                    title={
                                                        prop ===
                                                        'double_damage_to'
                                                            ? 'Strong'
                                                            : 'Weak'
                                                    }
                                                    prop={prop}
                                                    key={index}
                                                />
                                            );
                                        })}
                                    </div>
                                    <div className="close">
                                        <button onClick={goBack}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <line
                                                    x1="18"
                                                    y1="6"
                                                    x2="6"
                                                    y2="18"
                                                ></line>
                                                <line
                                                    x1="6"
                                                    y1="6"
                                                    x2="18"
                                                    y2="18"
                                                ></line>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    }}
                </Color>
            )}
        </div>
    );
};
