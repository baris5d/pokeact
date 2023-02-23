import React, { useEffect } from 'react';
import { Input } from '../../components/Input';
import { CardListing } from '../CardListing/card-listing';
import './search.scss';

export const Search = () => {
    const [search, setSearch] = React.useState<string>('s');
    const [typing, setTyping] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTyping(true);
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTyping(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [typing]);

    return (
        <div className="search-wrapper">
            <div className={`__center ${search.length ? ' stick' : ''}`}>
                <Input
                    placeholder="Search for a PoKeMoN"
                    onChange={handleChange}
                    value={search}
                />

                <CardListing name="Search Results" />
            </div>
        </div>
    );
};
