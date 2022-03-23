import { useRouter } from "next/router"

export default function ReadPost() {
  const router = useRouter();

  return (
    <div>
      {router.query.id}
    </div>
  )
}