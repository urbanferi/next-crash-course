import { useRouter } from "next/router"
import Router from "next/dist/server/router"

const Article = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            This is article #{id}.
        </div>
    )
}

export default Article
