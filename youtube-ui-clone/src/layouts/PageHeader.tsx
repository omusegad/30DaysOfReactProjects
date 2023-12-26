import { Menu } from "lucide-react"
import mk from "../assets/mk.svg"


export default function PageHeader() {
  return (
    <>
    <div className="flex gap-10 lg:gap-20 justify-between ">
      <div className="max-h-screen flex flex-col">
        <button>
          <Menu/>
        </button>
        <PageHeader/>
      </div>
      <div className="flex gap-4 items-center flex-shrink-0">
        <a className="bg-amber-500" href="/">
          <img className="h-6" src={mk} alt="" />
        </a>
      </div>
      <div></div>
      <div></div>

    </div>
    </>
  )
}
