const Util = {

    weekOfYear: function(){
        const now = new Date();
        const thisYear = now.getFullYear();
        const start = new Date(thisYear, 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor((diff / oneDay));
        const week = Math.ceil(day / 7);
        return week;
    }

}

export default Util;