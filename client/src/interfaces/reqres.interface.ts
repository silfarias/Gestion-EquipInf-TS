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

export interface Inventory {
    id: number;
    location: string;
    unit_price: number;
    stock: number;
    equipment_id: number;
    equipment: Equipment;
};