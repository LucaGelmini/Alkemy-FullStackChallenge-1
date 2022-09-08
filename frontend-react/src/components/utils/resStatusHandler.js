function resStatusHandler(status, setLogedFlag, navigate) {
    switch (status) {
        case 401:
            setLogedFlag(false);
            sessionStorage.removeItem('currentUser');
            navigate('/');
            alert('Session expired');
            break;
        case 422:
            alert('Bad input');
            window.location.reload();
            break;
        default:
            break;
    }
}

export default resStatusHandler;