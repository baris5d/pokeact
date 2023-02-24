import React, { useEffect } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import {
    CSSTransition,
    SwitchTransition,
    TransitionGroup,
} from 'react-transition-group';
import { findProperImage } from '../../utils/helpers';
import { usePokemon, usePokemonCollector } from '../../utils/hooks/pokemons';
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
                <div className="pokemon-detail__wrapper">
                    <div className="pokemon-detail__image">
                        <img
                            src={findProperImage(collectedPokemon.sprites)}
                            alt={collectedPokemon.name}
                        />
                    </div>
                    <div className="pokemon-detail__info">
                        <h1>{collectedPokemon.name}</h1>
                        <p>Height: {collectedPokemon.height}</p>
                        <p>Weight: {collectedPokemon.weight}</p>
                    </div>
                    <div className="close">
                        <button onClick={goBack}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
