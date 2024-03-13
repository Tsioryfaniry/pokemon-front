import clsx from "clsx"

interface Props{
    variant?:"h1"|"h2"|"h3"|"h4"|"h5"|"lead"|"body-lg"|"body-base"|"body-sm"
    children:React.ReactNode,
    component?:"h1"|"h2"|"h3"|"h4"|"h5"|"p"|"div"|"span"
    theme?:"black"|"gray"|"white"|"primary"|"secondary"
    weight?:"regular"| "medium"
    className?:string
}
export default function Heading({variant="h3",component:Component="div",theme="black",weight="medium",children}:Props) {
  let variantStyle:string =""
  switch (variant) {
    case "h1":
        variantStyle="pt-8 text-6xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"        
        break; 
    case "h2":
            variantStyle="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"        
            break;
    case "h3":
            variantStyle="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"        
            break;
    case "h4":
            variantStyle="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500"        
            break;
    case "h5":
            variantStyle="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-red-500"        
            break;
  } 
    return (
     <Component className={clsx(variantStyle)}>
        {children}
     </Component>
      )
}
