import React from 'react';
import { Type } from '../../types/pokemon';
import { PokemonType, TypeIcon } from '../TypeIcon/type-icon';

interface Props {
    types: Type[];
    title: string;
    prop: string;
}
export const PokemonTypes = (props: Props) => {
    const { types, title, prop } = props;

    return (
        <div className="pokemon-detail__strong">
            <h3>{title} Against</h3>
            <div className="pokemon-detail__strong-wrapper">
                {types.map((item) => {
                    return (
                        <>
                            {item.type.damage_relations[prop].map(
                                (
                                    type: {
                                        name: React.Key | null | undefined;
                                    },
                                    index: number,
                                ) => {
                                    return (
                                        <>
                                            <div
                                                className="pokemon-detail__strong-item pokemon-detail__types-round"
                                                key={index}
                                            >
                                                <TypeIcon
                                                    type={`${
                                                        type.name as PokemonType
                                                    }`}
                                                    className={`pokemon-detail__strong-item pokemon-detail__types-item--${type.name}`}
                                                    size={24}
                                                />
                                            </div>
                                        </>
                                    );
                                },
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
};
