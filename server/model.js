const allPlants = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/all',
    headers: {
        'X-RapidAPI-Key': '92281c861amsh0dc7479d29c87dbp1abf0fjsn4f04df345ae3',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
};

const onePlant = {
    method: 'GET',
    url: 'https://house-plants.p.rapidapi.com/common/silvervase',
    headers: {
        'X-RapidAPI-Key': '92281c861amsh0dc7479d29c87dbp1abf0fjsn4f04df345ae3',
        'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
    }
};

module.exports = { allPlants, onePlant };
