function social (cd) {
    setTimeout (() => {
        console.log("Enjoying in the KTV! with ကြယ်စင် လမင်း")
        cd();
    }, 1000)
}
social();

function fighting () {
    setTimeout (() => {
        console.log("Fighting .... and checking his phone")
    }, 1500)
}
social(() => {
    fighting
});


function social () {
    setTimeout (() => {
        return new Promise((res, re) => {
            res("Enjoying in the KTV! with ကြယ်စင် လမင်း")
        });

    }, 1000)
}

function fighting () {
    return new Promise ((res, re) => {
        setTimeout (() => {
        res("Fighting .... and checking his phone")
        }, 1500)
    })

}
social() 
.then ((e)=> {
    console.log(e);
    return fighting ();
})
.then((y) =>{
    console.log(y);
});


function social () {
    setTimeout (() => {
        if(false) {
            return new Promise((res, re) => {
                res("Enjoying in the KTV! with ကြယ်စင် လမင်း")
            });
        }else {
            re("erro");
        }
      

    }, 1000)
}

function fighting () {
    return new Promise ((res, re) => {
        setTimeout (() => {
        res("Fighting .... and checking his phone")
        }, 1500)
    })

}
social() 
.then ((e)=> {
    console.log(e);
    return fighting ();
})
.then((y) =>{
    console.log(y);
});
