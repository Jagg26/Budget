export const checkBudget = (budget, remaining) => {
    let c;

    if( ( budget / 4 ) > remaining ) {
        c = 'alert alert-danger';
    }else if( (budget / 2) > remaining ){
        c = 'alert alert-warning';
    }else {
        c = 'alert alert-success';
    }

    return c;
}