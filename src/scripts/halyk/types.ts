export interface Token {
    access_token:   string;
    expires_in:     string;
    refresh_token:  string;
    scope:          string;
    security_level: string;
    token_type:     string;
}

export interface Item {
    id:                    string;
    name:                  string;
    address:               string;
    longitude:             string;
    latitude:              string;
    tags:                  Tag[];
    category_id:           string;
    category_name:         string;
}

export interface Tag {
    code:           Code;
    text:           string;
    order_priority: number;
}

export enum Code {
    Bonus = "bonus",
    Phone = "phone",
}
