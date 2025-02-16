import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

const Sidebar = () => {

    const menuOptions = (
        <>
            <NewDocumentButton />
        </>
    )

    return (
        <div className="p-2 md:p-5 bg-grey relative">
            <div className="md:hideen">
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle>
                                <div>
                                    {menuOptions}
                                </div>
                            </SheetTitle>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:inline">
                {menuOptions}
            </div>
        </div>
    )
}

export default Sidebar