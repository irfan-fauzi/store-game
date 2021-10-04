import { useRouter } from "next/router"

const Detail = () => {
  const router = useRouter()
  const {id} = router.query
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Detail

// export const getStaticPaths = async() => {
//   const url = "https://jsonplaceholder.typicode.com/posts"
//   const result = await fetch(url)
//   const dataUser = await result.json()
//   const paths = dataUser.map(el => {
//     return {params: { id: el.id }}
//   })
//   return {paths} 
// }

// export const getStaticProps = () => {

// }