export type InputsLogin = {
    user_name: string,
    password: string
};

export type Inputs = {
    model: string;
    mark: string;
    description: string | null;
    date_acquisition: string;
    state: string;
    category_id: number;
    location: string;
    unit_price: number;
    stock: number;
};