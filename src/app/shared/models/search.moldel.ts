import { PaginationModel } from "./pagination.model";
import { TrackModel } from "./track.model";

export class SearchModel {
    track: TrackModel[];
    pageInfo: PaginationModel;
}

