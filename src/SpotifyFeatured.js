import React, { Component } from 'react';
import { BrowseFeatured } from 'react-spotify-api'


export class SpotifyFeatured extends Component {
    render() {
        return (
            <div>
                <BrowseFeatured>
                    {(playlists, loading, error) => (
                        playlists ? (
                            playlists.playlists.items.map(playlist => (
                                <h1 key={playlist.id}>{playlist.name}</h1>
                            ))
                        ) : null
                    )}
                </BrowseFeatured>
            </div>
        );
    }
}

export default SpotifyFeatured;