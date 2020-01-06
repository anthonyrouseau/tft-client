
function placement(n) {
    switch(n){
        case 1: return '1st'
        case 2: return '2nd'
        case 3: return '3rd'
        default: return `${n}th`
    }
}

function cleanName(name) {
    let sep = name.split("_");
    return sep.length === 1 ? sep[0] : sep[1];
}

function Count(items) {
    return items.reduce((counts, item) => {
        if(!counts[item]){
            counts[item] = 1;
        }else{
            counts[item]++;
        }
        return counts
    }, {});
}

function containsAll(items, values){
    let answer = true;
    let i = 0;
    while(answer && i < values.length){
        answer = items.indexOf(values[i]) === -1 ? false : true
        i++;
    }
    return answer
}

export const PlacementCounts = (matches, options) => {
    var placements = [];
    if(options.traits.length === 0 && options.units.length === 0){
        placements = matches.map(match => match.playerStats.placement);
    }else{
        if(options.traits.length > 0 && options.units.length > 0){
            placements = matches.filter(match => {
                let matchTraits = match.traits.map(trait => cleanName(trait.name));
                let matchUnits = match.units.map(unit => cleanName(unit.character_id));
                return containsAll(matchTraits, options.traits) && containsAll(matchUnits, options.units)
            }).map(match => match.playerStats.placement);
        }else if(options.traits.length > 0){
            placements = matches.filter(match => {
                let matchTraits = match.traits.map(trait => cleanName(trait.name));
                return containsAll(matchTraits, options.traits)
            }).map(match => match.playerStats.placement);
        }else{
            placements = matches.filter(match => {
                let matchUnits = match.units.map(unit => cleanName(unit.character_id));
                return containsAll(matchUnits, options.units)
            }).map(match => match.playerStats.placement);
        }
    }
    let placementCounts = Count(placements);
    let data = [1,2,3,4,5,6,7,8].map(place => {
        let xVal = placement(place);
        let yVal = placementCounts[place] || 0;
        return {x: xVal, y: yVal}
    });
    return data
}

function formatData(countsObject) {
    return Object.keys(countsObject).map(key => {
        return {x: key, y: countsObject[key]}
    })
}

export const TraitCounts = matches => {
    let traits = matches.reduce((traits, match) => {
        return traits.concat(match.traits.map(trait => cleanName(trait.name)))
    }, [])
    let traitCounts = Count(traits);
    return formatData(traitCounts);
}

export const UnitCounts = matches => {
    let units = matches.reduce((units, match) => {
        return units.concat(match.units.map(unit => cleanName(unit.character_id)))
    }, [])
    let unitCounts = Count(units);
    return formatData(unitCounts)
}

function uniques(l){
    let seen = {};
    return l.filter(item => {
        return seen.hasOwnProperty(item) ? false : (seen[item]=true)
    })
}

export const GetFilters = matches => {
    let unitSet = uniques(matches.reduce((allUnits, match) => {
        return allUnits.concat(match.units.map(unit => cleanName(unit.character_id)))
    }, []));
    let traitSet = uniques(matches.reduce((allTraits, match) => {
        return allTraits.concat(match.traits.map(trait => cleanName(trait.name)))
    }, []));
    return {traits: traitSet.sort(), units: unitSet.sort()}
}