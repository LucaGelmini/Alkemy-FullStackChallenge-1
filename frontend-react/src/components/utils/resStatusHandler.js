function resStatusHandler(status, setLogedFlag, navigate) {
    switch (status) {
        case 401:
            setLogedFlag(false);
            sessionStorage.removeItem('currentUser');
            navigate('/');
            alert('Session expired');
            break;
        default:
            break;
    }
}

export default resStatusHandler;