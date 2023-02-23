import React from 'react';
import './card.scss';
import Color, { useColor } from 'color-thief-react';
import PokeLoader from '../PokeLoader/poke-loader';

export interface Props {
    name: string;
    id: string;
    image: string;
}

export const Card = (props: Props) => {
    const { name, id, image } = props;

    const formatNumber = (num: string) => {
        return num.padStart(3, '0');
    };

    return (
        <div className={`card`}>
            <Color src={image} format="hex" crossOrigin="Anonymous">
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
                                style={{ backgroundColor: data }}
                            >
                                <div className="card__image-wrapper">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__title">{name}</div>
                                <div className="card__id">
                                    {formatNumber(id)}
                                </div>
                            </div>
                        );
                }}
            </Color>
        </div>
    );
};
