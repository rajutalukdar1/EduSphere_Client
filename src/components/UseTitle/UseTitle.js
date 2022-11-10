import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title} -EduSphere`
    }, [title])
}

export default UseTitle;