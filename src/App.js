import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/Home/HomePage";
import NavbarLogin from "./Components/Utils/NavbarLogin";
import Footer from "./Components/Utils/Footer";
import { LoginPage } from "./Page/Auth/LoginPage";
import { RegisterPage } from "./Page/Auth/RegisterPage";
import { AllCategoryPage } from "./Page/Category/AllCategoryPage";
import { AllBrandPage } from "./Page/Brand/AllBrandPage";
import { ShopProductsPage } from "./Page/Products/ShopProductsPage";
import { ProducDetalisPage } from "./Page/Products/ProducDetalisPage";
import { CartPage } from "./Page/Cart/CartPage";
import { CheckOutPage } from "./Page/Checkout/CheckOutPage";
import { AdminAllProductPage } from "./Page/Admin/AdminAllProductPage";
import { AdminAllOrderPage } from "./Page/Admin/AdminAllOrderPage";
import { AdminOrderDetalisPage } from "./Page/Admin/AdminOrderDetalisPage";
import { AdminAddBrandPage } from "./Page/Admin/AdminAddBrandPage";
import { AdminAddCategoryPage } from "./Page/Admin/AdminAddCategoryPage";
import { AdminAddSubCategoryPage } from "./Page/Admin/AdminAddSubCategoryPage";
import { AdminAddProductsPage } from "./Page/Admin/AdminAddProductsPage";
import { UserAllOrderPage } from "./Page/User/UserAllOrderPage";
import { UserFavoriteProductPage } from "./Page/User/UserFavoriteProductPage";
import { UserAddressPage } from "./Page/User/UserAddressPage";
import { UserAddAddressPage } from "./Page/User/UserAddAddressPage";
import { UserEditAddressPage } from "./Page/User/UserEditAddressPage";
import { UserProfilePage } from "./Page/User/UserProfilePage";

function App() {
  
  return (
    <div className="font">
      <NavbarLogin/>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/allcategory" element={<AllCategoryPage/>}/>
        <Route path="/allbrand" element={<AllBrandPage/>}/>
        <Route path="/products" element={<ShopProductsPage/>}/>
        <Route path="/detalis/:id" element={<ProducDetalisPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/order/payment" element={<CheckOutPage/>}/>
        <Route path="/admin/allproducts" element={<AdminAllProductPage/>}/>
        <Route path="/admin/allorders" element={<AdminAllOrderPage/>}/>
        <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage/>}/>
        <Route path="/admin/addbrand" element={<AdminAddBrandPage/>}/>
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>}/>
        <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>}/>
        <Route path="/admin/addproducts" element={<AdminAddProductsPage/>}/>
        <Route path="/user/allorders" element={<UserAllOrderPage/>}/>
        <Route path="/user/favoriteproduct" element={<UserFavoriteProductPage/>}/>
        <Route path="/user/address" element={<UserAddressPage/>}/>
        <Route path="/user/add-address" element={<UserAddAddressPage/>}/>
        <Route path="/user/edit-address" element={<UserEditAddressPage/>}/>
        <Route path="/user/profile" element={<UserProfilePage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}


export default App;
