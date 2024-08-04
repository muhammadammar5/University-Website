const Sidebar = ({ selectedTab, setSelectedTab }) => {

    return <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "180px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Flex</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item" onClick={() => { setSelectedTab("Home") }}>
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Home' && 'active'}`} aria-current="page">
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
                        Home
                    </a>
                </li>
                <hr />
                <li onClick={() => { setSelectedTab("Create Post") }}>
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Create Post' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Transcript
                    </a>
                </li>

                <li >
                    <hr />
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Marks' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Marks
                    </a>
                </li>
                <hr />
                <li >
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Marks' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Fees
                    </a>
                </li>
                <hr />
                <li >
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Marks' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Courses
                    </a>
                </li>
                <hr />
                <li >
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Marks' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Passwords
                    </a>
                </li>
                <hr />
                <li >
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Marks' && 'active'}`}>
                        <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
                        Feedback
                    </a>
                </li>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="src/components/pfp.jpg" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <h6>Your Account</h6>
                    </a>
                </div>
            </ul>
            <hr />

        </div>
    </>
};
export default Sidebar;