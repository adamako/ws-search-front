export interface Result {
    _id: string;
    _index: string;
    _score: number;
    _source: Source;
}

interface Source {
    subject: string;
    object: string;
    predicate: string;
}
