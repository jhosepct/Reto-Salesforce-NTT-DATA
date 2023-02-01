export interface PhotoData extends Record<string, any> {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface DataBody extends Record<string, any> {
    name: string;
    lastname: string;
    age: number;
    gender: string;
    email: string;
    nationality: string;
    photo: PhotoData;
}

export interface DataHeader {
    name: string;
    width?: string;
    align?: 'left' | 'center' | 'right';
    id: string;
    sortable?: boolean;
}