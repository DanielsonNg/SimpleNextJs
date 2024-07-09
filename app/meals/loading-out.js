import style from './loading.module.css'

export default function MealsLoading(){
    return(
        <p className={style.loading}>Fetching Meals....</p>
    )
}