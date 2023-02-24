import React from 'react';
import './card.scss';
import Color, { useColor } from 'color-thief-react';
import { PokeLoader } from '../PokeLoader/poke-loader';
import { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';
import { findProperImage } from '../../utils/helpers';

export const Card = (props: Pokemon) => {
    const { name, id, sprites } = props;

    const formatNumber = (num: string) => {
        return num.padStart(3, '0');
    };

    const useRGBA = (hex: string) => {
        const [r, g, b] = hex.match(/\w\w/g)?.map((c) => parseInt(c, 16)) ?? [
            0, 0, 0,
        ];
        return `rgba(${r}, ${g}, ${b}, 0.8)`;
    };

    return (
        <Link to={`/pokemon/${id}`}>
            <div className={`card`}>
                <Color
                    src={findProperImage(sprites)}
                    format="hex"
                    crossOrigin="Anonymous"
                >
                    {({ data, loading, error }) => {
                        if (loading)
                            return (
                                <div className="card__wrapper">
                                    <PokeLoader />
                                </div>
                            );
                        if (error) return <div>{JSON.stringify(error)}</div>;
                        if (data)
                            return (
                                <div
                                    className="card__wrapper"
                                    style={{ backgroundColor: useRGBA(data) }}
                                >
                                    <div className="card__image-wrapper">
                                        <img
                                            src={findProperImage(sprites)}
                                            alt={name}
                                            className="card__image"
                                        />
                                    </div>
                                    <div className="card__info">
                                        <div className="card__title">
                                            {name}
                                        </div>
                                        <div className="card__id">
                                            {formatNumber(id.toString())}
                                        </div>
                                    </div>
                                </div>
                            );
                    }}
                </Color>
            </div>
        </Link>
    );
};
