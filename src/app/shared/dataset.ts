export interface productData {
    imgurl: string;
    title: string;
    price: string;
    qty: number;
}
export interface categoryData {
    name: string;
    isDropDownMenu: boolean;
    subMenu: menuList[];

   
}
export interface menuList{
    data1: string;
    data2: string;
}




