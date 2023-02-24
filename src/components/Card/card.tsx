import React from 'react';
import './card.scss';
import Color, { useColor } from 'color-thief-react';
import { PokeLoader } from '../PokeLoader/poke-loader';
import { Pokemon } from '../../types/pokemon';
import { Link } from 'react-router-dom';
import {
    findProperImage,
    formatNumber,
    kebabCaseToTitleCase,
    useOppositeColor,
    useRGBA,
} from '../../utils/helpers';
import { Image } from '../Image/image';

export const Card = (props: Pokemon) => {
    const { name, id, sprites } = props;

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
                                        <Image
                                            src={findProperImage(sprites)}
                                            alt={name}
                                            className="card__image"
                                        />
                                    </div>
                                    <div className="card__info">
                                        <div
                                            className="card__title"
                                            style={{
                                                color: useOppositeColor(data),
                                            }}
                                        >
                                            {kebabCaseToTitleCase(name)}
                                        </div>
                                        <div
                                            className="card__id"
                                            style={{
                                                color: useOppositeColor(data),
                                            }}
                                        >
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
