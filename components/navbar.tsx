import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import CustomLink from "@/components/custom-link"

export default function NavigationBar({ children } : React.PropsWithChildren<{}>) {
  return (
    <>
      <header className="sticky top-0 z-50 flex h-20 w-full shrink-0 items-center px-4 md:px-6 backdrop-blur">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden border-none" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <CustomLink className="mr-6 hidden lg:flex" href="#">
              <MountainIcon className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </CustomLink>
            <div className="grid gap-2 py-6">
              <CustomLink className="flex w-full items-center py-2 text-lg font-semibold" href="/">
                Home
              </CustomLink>
              <CustomLink className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                OCR
              </CustomLink>
              <CustomLink className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Practice
              </CustomLink>
              <CustomLink className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Study
              </CustomLink>
            </div>
          </SheetContent>
        </Sheet>
        <CustomLink className="mr-6 hidden lg:flex" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </CustomLink>
        <nav className="ml-auto hidden lg:flex gap-6">
          <CustomLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium"
            href="#"
          >
            Home
          </CustomLink>
          <CustomLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium"
            href="/ocr"
          >
            OCR
          </CustomLink>
          <CustomLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium"
            href="/practice"
          >
            Practice
          </CustomLink>
          <CustomLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium"
            href="/study"
          >
            Study
          </CustomLink>
        </nav>
      </header>
      <section className="py-8 px-4 md:px-6">
        {children}
      </section>
    </>
  )
}

function MenuIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
