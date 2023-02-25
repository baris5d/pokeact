import React from 'react';
import { Stats } from '../../types/pokemon';
import {
    kebabCaseToTitleCase,
    maxStat,
    useOppositeColor,
} from '../../utils/helpers';

interface StatProps {
    stats: Stats[];
    color: string;
}

export const PokemonDetailStats = (props: StatProps) => {
    const { stats, color } = props;

    return (
        <div className="pokemon-detail__stats">
            <div className="pokemon-detail__stats-wrapper">
                {stats.map((item, index) => {
                    return (
                        <div
                            className="pokemon-detail__stats-item"
                            data-testid="pokemon-detail-stats-item"
                            key={index}
                        >
                            <div
                                className="pokemon-detail__stats-item-name"
                                data-testid="pokemon-detail-stats-item-name"
                            >
                                {kebabCaseToTitleCase(item.stat.name)}
                            </div>
                            <div className="pokemon-detail__stats-item-bar">
                                <div
                                    className="pokemon-detail__stats-item-bar-inner"
                                    data-testid="pokemon-detail-stats-item-bar-inner"
                                    style={{
                                        width: `${
                                            (item.base_stat * 100) /
                                            maxStat(item.base_stat)
                                        }%`,
                                        backgroundColor:
                                            useOppositeColor(color),
                                    }}
                                ></div>
                            </div>
                            <div
                                className="pokemon-detail__stats-item-value"
                                data-testid="pokemon-detail-stats-item-value"
                            >
                                {item.base_stat}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
