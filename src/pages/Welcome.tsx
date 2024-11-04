import Onboard from "../components/organization/onboard/onboard.tsx";

function Welcome() {
    return (
        <div className="page d-flex flex-row flex-column-fluid">
            <div className="d-flex flex-column flex-root vh-100">
                <div id="kt_onboard" className="d-flex flex-column flex-lg-row flex-column-fluid bg-white">
                    <Onboard />
                </div>
            </div>
        </div>
    )
}

export default Welcome;