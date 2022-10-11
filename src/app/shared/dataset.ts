export interface productData {
    imgurl: string;
    title: string;
    price: number;
    qty: number;
}
export interface categoryData {
    menuitems: categoryData[];
    name: string;
    isDropDownMenu: boolean;
    subMenu: menuList[];  
}
export interface menuList{
    data1: string;
    data2: string;
}
export interface products{
    category: string;
    imgurl: string;
    title: string;
    price: number; 
    qty: number;
}
export interface menuData{
    id: number;
    category: string;
    data: string;
}

