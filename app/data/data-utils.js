import {data, categoryOfGames} from "./data";




export const getGamesByCategory = (category) => {
    return data.filter((game)=> {
        return game.category.find((item) => {
            return item.name === category;
    });
});
   }

 export const  getGameById = (id) =>{
    return data.find((game)=>  game.id === Number(id));
}



export const  getCategoryName = (category) =>{

    return categoryOfGames[category]
}

