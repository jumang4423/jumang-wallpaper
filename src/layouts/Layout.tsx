import React, { useEffect, useState } from "react"
import "@/styles/layout/Layout.scss"
const RotateJumang = React.lazy(() =>
  import("@/components/RotateJumang")
)

interface Props {
}

const Layout: React.FC<Props> = () => {
  // states
  const isSSR: any = typeof window === "undefined"
  const [isRotateJumang, setIsRotateJumang] = useState<Boolean>(false)

  useEffect(() => {
    setTimeout(() => { setIsRotateJumang(true) }, 500);
  }, []);

  return (
    <>
      <div className="MainPage">
        {!isSSR && isRotateJumang &&
          <React.Suspense fallback={<div />}>
            <RotateJumang />
          </React.Suspense>
        }
      </div>
    </>
  )
}

export default Layout
