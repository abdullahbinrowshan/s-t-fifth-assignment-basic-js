/* --------------------------
    // first problem start
----------------------------- */

function radianToDegree(radians) {
    if (typeof radians !== 'number') {
        return "Please provide a valid input";
    } else {
        const degrees = Number((radians * 57.2958).toFixed(2));
        return degrees
    }
}

/* --------------------------
    // first problem end
----------------------------- */




/* --------------------------
    // second problem start
----------------------------- */

function isJavaScriptFile(file) {
    if (typeof file === 'string') {
        const length = file.length;
        const fileMark = file.slice(length - 3, length);
        if (fileMark === '.js') {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please provide a valid input";
    }
}

/* --------------------------
    // first problem end
----------------------------- */





/* --------------------------
    // third problem start
----------------------------- */

function oilPrice(dieselLiter, petrolLiter, octanLiter) {
    const dieselPricePerLiter = 114;
    const petrolPricePerLiter = 130;
    const octanPricePerLiter = 135;

    if (typeof dieselLiter === 'number' && typeof petrolLiter === 'number' && typeof octanLiter === 'number') {
        const totalDieselPrice = dieselPricePerLiter * dieselLiter;
        const totalPetrolPrice = petrolPricePerLiter * petrolLiter;
        const totalOctanPrice = octanPricePerLiter * octanLiter;

        const totalPrice = Number((totalDieselPrice + totalPetrolPrice + totalOctanPrice).toFixed(2));

        return totalPrice
    } else {
        return "Please provide a valid input";
    }
}

/* --------------------------
    // third problem end
----------------------------- */





/* --------------------------
    // fourth problem start
----------------------------- */

function publicBusFare(people) {
    const eachBusTicketCosts = 250;

    if (typeof people === 'number') {
        while (people >= 50) {
            people -= 50;
        }
        while (people >= 11) {
            people -= 11;
        }
        const remainingPeople = Number((eachBusTicketCosts * people).toFixed(2));
        return remainingPeople;
    } else {
        return "Please provide a valid input";
    }
}

/* --------------------------
    // fourth problem end
----------------------------- */





/* --------------------------
    // fifth problem start
----------------------------- */

function isBestFriend(isFriend1, isFriend2) {
    const { name: name1, friend: friend1 } = isFriend1;
    const { name: name2, friend: friend2 } = isFriend2;

    if (typeof isFriend1 === 'object' && typeof isFriend2 === 'object') {
        if (typeof name1 !== 'string' ||
            typeof friend1 !== 'string' ||
            typeof name2 !== 'string' ||
            typeof friend2 !== 'string') {
            return "Please provide valid input";
        } else {
            if (name1 === friend2 && name2 === friend1) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return "Please provide valid input";
    }
}

/* --------------------------
    // fifth problem end
----------------------------- */