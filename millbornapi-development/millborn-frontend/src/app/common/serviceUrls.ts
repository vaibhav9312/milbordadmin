import { environment } from '../../environments/environment';
export const serviceUrls = {
    signIn: environment.host + "api/account/login",
    clienttypelist : environment.host + "api/clienttype/list",
    clienttypecreate : environment.host + "api/clienttype/create",
    clienttypedelete : environment.host + "api/clienttype/delete/",
    clienttypeupdate : environment.host + "api/clienttype/update/",
    countryList : environment.host + "api/generic/countrylist",
    stateByCountryId : environment.host + "api/generic/statebycountry/",
    cityByStateId : environment.host + "api/generic/citybystate/",
    mainItemListByClientType : environment.host + "api/generic/mainitemsbyclienttype/",
    clientlist : environment.host + "api/clientmng/client/list",
    clientDetails : environment.host + "api/clientmng/client/details/",
    clientCreate : environment.host + "api/clientmng/client/create",

    getProductslist : environment.host + "api/productRegistration/list",
    getProductsCreate : environment.host + "api/productRegistration/create",
    getProductsImages : environment.host + "api/productRegistration/ProductsImages",
    productdelete: environment.host + "api/productRegistration/delete/",
    productupdate: environment.host + "api/productRegistration/update/",
    productDetails : environment.host + "api/productRegistration/details/",
    
    
    productGroupLists : environment.host + "api/productGroup/list",
    productSubGroupListByID : environment.host + "api/productGroup/SubGroupListByID/",

    ProductCategoryListByID : environment.host + "api/productGroup/ProductCategoryListByID/",
    ProductSubCategoryListsByID : environment.host + "api/productGroup/ProductSubCategoryListsByID/",
    
    productSubGroupLists : environment.host + "api/productGroup/subGroup",
    
    productCategoryLists : environment.host + "api/productGroup/CategoryList",
    productSubCategoryLists : environment.host + "api/productGroup/SubCategoryList",
    deleteProductDocuments : environment.host + "api/productRegistration/deletedoc"  
}