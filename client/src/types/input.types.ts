export type InputsLogin = {
    user_name: string,
    password: string
};

export type InputsRegister = {
    user_name: string,
    email: string,
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

export type InputsUpd = {
    id: number;
    model: string;
    mark: string;
    description: string | null;
    date_acquisition: string;
    state: string;
    category_id: number;
    user_id: number;
    inventory: {
        location: string;
        unit_price: number;
        stock: number;
    };
};

export type InputsPurchase = {
    id: number;
    quantity: number;
    client_id: number;
    equipment_id: number;
    total: number;
};