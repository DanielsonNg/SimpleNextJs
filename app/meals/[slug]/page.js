import Link from "next/link";
import style from "./page.module.css"
import Image from "next/image";
import getMeal from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({params}){
    const meal = getMeal(params.slug)
    return {
        title: meal.title,
        description: meal.summary
    }
    
}

export default function MealsDetail({params}){
    const meal = getMeal(params.slug)

    if(!meal){
        notFound()
    }

    meal.instructions = meal.instructions.replace(/\n/g, '<br />')

    return(
        <>
        <header className={style.header}>
            <div className={style.image}>
                <Image src={meal.image} alt={meal.title} fill />
            </div>
            <div className={style.headerText}>
                <h1>{meal.title}</h1>
                <p className={style.creator}>
                    by <a href={`mailto:${meal.creator_name}`}>{meal.creator}</a>
                </p>
                <p className={style.summary}>{meal.summary}</p>
            </div>
        </header>
        <main>
            <p className={style.instructions} dangerouslySetInnerHTML={{
                __html: meal.instructions,
            }}></p>
        </main>
        </>
    )
}