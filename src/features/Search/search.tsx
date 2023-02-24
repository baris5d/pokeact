import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Input } from '../../components/Input';
import { PoketopsLoader } from '../../components/PokeLoader/poke-loader';
import { CardListing } from '../CardListing/card-listing';
import './search.scss';

export const Search = () => {
    const [search, setSearch] = React.useState<string>('');
    const [typing, setTyping] = React.useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTyping(true);
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTyping(false);
        }, 1000);

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

                {search.length > 0 && !typing && (
                    <CardListing filter={search} />
                )}

                {search.length > 0 && typing && (
                    <>
                        <PoketopsLoader />
                    </>
                )}
            </div>
        </div>
    );
};
