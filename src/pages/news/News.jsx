import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const News = () => {
    return (
        <div className="mt-4">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 lg:grid-cols-4">
                <div className="col-span-3">
                    <h3>amar vindeshi tara eka rater e akashe . tumi bajale ek tara amar chile kothar pashe . thik sondhe namar age tmnar nam dhore key dake. mukhe lukiye kar buke , tmr golpo blo kake</h3>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;