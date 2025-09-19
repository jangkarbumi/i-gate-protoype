import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function About() {
    return(
        <div className="relative h-screen">

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-7">
                <h1 className="text-xl md:text-5xl font-bold">404 NOT FOUND!</h1>
                <p className="text-lg md:text-2xl font-semibold">This Page is Not Ready Yet!</p>

                <Button>
                    <Link href={'/'}>Homepage</Link>
                </Button>
            </div>
        </div>

    )
}