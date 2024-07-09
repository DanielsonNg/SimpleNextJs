import MealItem from './mealItem'
import style from './mealsGrid.module.css'
export default function MealsGrid({meals}){
    return(
        <ul className={style.meals}>
            {meals.map(meal => <li key={meal.id}>
                <MealItem {...meal}/>
            </li>)}
        </ul>
    )
}
