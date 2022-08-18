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




