import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title=`GOODIE FOODIE | ${title}`
    })
}

export default useTitle