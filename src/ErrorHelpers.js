export function FormatError(err){
    err = err.response.data;
    console.log(err);
    switch(err.code){
        case 429:
            err.type = 'warning';
            return err;
        case 404:
        default:
            err.type = 'danger';
            return err
    }
}