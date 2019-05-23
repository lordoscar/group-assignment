import React, { Component } from 'react';
import { PlaylistTracks } from 'react-spotify-api';

let toplist_id = '37i9dQZEVXbLiRSasKsNU9';

export class SpotifyTop100 extends Component {
    render() {
        return (
            <div>
                <PlaylistTracks id={toplist_id}>
                    {(tracks, loading, error) => (
                        tracks ? (
                            tracks.items.map(track => (
                                <h1 key={track.track.id}>{track.track.name}</h1>
                            ))
                        ) : null
                    )}
                </PlaylistTracks>
            </div>
        );
    }
}

export default SpotifyTop100;