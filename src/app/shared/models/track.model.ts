import { ArtistModel } from "./artist.model";
import { ImageModel } from "./image.model";

export class TrackModel {
    name: String;
    duration: string;
    listeners: string;
    playcount: string;
    streamable: string;
    url: string;
    artist: ArtistModel;
    mbid: string;
    image: ImageModel[];
}

