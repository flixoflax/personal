import type { ReactNode } from "react";

interface Props {
  isActive?: boolean;
  href?: string;
  children: ReactNode
}

const Navlink = (props: Props) => {
  const { isActive = false, href = "#", children } = props;
  const className = isActive
    ? "text-center after:transition-all text-white relative after:absolute after:h-[2px] after:mx-auto after:inset-x-0 after:-bottom-2 hover:after:w-full font-medium after:w-full after:bg-white"
    : "text-center after:transition-all text-white relative after:absolute after:h-[2px] after:mx-auto after:inset-x-0 after:-bottom-2 hover:after:w-full after:w-0 after:bg-white/70";

  return (
<a className={className} href={href}>{props.children}</a>
  )
}

export default Navlink



