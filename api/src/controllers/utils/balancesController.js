module.exports = {
    dbErrorsHandler: e => {
        console.log(e);
        return { errorMessage: e.errors ? e.errors.map(o => o.message) : e.name }
    }
}