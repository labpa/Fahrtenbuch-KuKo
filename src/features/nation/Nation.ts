export type Nation = {
    id: number;
    name: string;
    hauptstadt: string;
    einwohner: number;
}

export type InputNation = Omit<Nation, 'id'> & {
    id?: number;
};