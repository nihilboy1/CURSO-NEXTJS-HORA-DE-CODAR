import Link from "next/link"


export default function Home(){
  return (
    <div>
      <Link href={"/estiloso"}>
        To Estiloso
      </Link>
    </div>
  )
}