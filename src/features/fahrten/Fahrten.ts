export type Fahrt = {
    id: string;
    vorname: string;
    nachname: string;
    nummernschild: string;
    grund: string;
    baujahr: string;
    kmBegin: number;
    kmEnde: number;
};

export type InputFahrt = Omit<Fahrt, 'id'> & {
    id?: string;
}