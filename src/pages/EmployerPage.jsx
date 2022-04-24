import OfferChanger from "../components/OfferChanger";
import ProfileInfo from "../components/ProfileInfo";

const EmployerPage = () => {
    return (
        <>
            <h1>Company profile</h1>
            <img src="https://thispersondoesnotexist.com/image" />
            <ProfileInfo isCompany={true}/>
            <OfferChanger />
        </>
    );
}

export default EmployerPage;