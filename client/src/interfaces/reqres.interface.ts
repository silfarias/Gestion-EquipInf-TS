export interface Equipment {
    id: number;
    category_id: number;
    user_id: number;
    description: string | null;
    model: string;
    mark: string;
    date_acquisition: string;
    state: string;
};