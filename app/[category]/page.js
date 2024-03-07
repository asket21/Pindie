import { CardsList } from "../components/CardsList/CardsList";
import { getGamesByCategory, getCategoryName } from "../data/data-utils";



export default function CategoryPage(props){
    const  arrayGamesByCategory =  getGamesByCategory(props.params.category);
    const category = props.params.category 
    const title = getCategoryName(category)
    return (<CardsList id={arrayGamesByCategory.id} title={title} data={arrayGamesByCategory}/>)
}