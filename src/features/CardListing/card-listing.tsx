import React from 'react';
import { Card } from '../../components/Card/card';
import './card-listing.scss';

export interface Props {
    name: string;
}

export const CardListing = (props: Props) => {
    const { name } = props;
    return (
        <div className="cards__grid">
            <Card
                name={name}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                id="1"
            ></Card>
            <Card
                name={name}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg"
                id="2"
            ></Card>
            <Card
                name={name}
                image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg"
                id="13"
            ></Card>
        </div>
    );
};
