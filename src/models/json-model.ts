export interface JsonModel{
    type:string;
    version:string;
    body: JsonChildElement[];
}

export interface JsonChildElement{
    type: string;
    props?: Record<string,string>;
    children?: JsonChildElement[];
    [key:string]: any;
}