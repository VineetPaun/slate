'use client'
import { db } from "@/firebase"
import { doc } from "firebase/firestore"
import { Link } from "lucide-react"
import { usePathname } from "next/navigation"
import { useDocumentData } from "react-firebase-hooks/firestore"

const SideBarOptions = ({ href, id }: {
    href: string
    id: string
}) => {

    const [data, loading, error] = useDocumentData(doc(db, "document", id))
    const pathname = usePathname()
    const isActive = href.includes(pathname) && pathname !== "/"

    if (!data) return null

    return (
        <div>
            <Link
                href={href}
                className={`border p-2 rounded-md ${isActive ? "bg-grey-300 font-bold border-black" : "border-grey-400"}`}
            >
                <p className="truncate">{data?.title}</p>
            </Link>
        </div>
    )
}

export default SideBarOptions