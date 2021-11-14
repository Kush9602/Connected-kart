import CompanyProducts from "./CompanyProducts";
import Header from "./Header";
import './css/UserHomePage.css';

function UserHomePage(props){
    return (
        <div className="main-user-div">
            <Header />
            <div className="product">
                <CompanyProducts />
            </div>
        </div>
    );
}

export default UserHomePage;