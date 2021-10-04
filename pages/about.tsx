import Layout from "../components/layout"
import { useRouter } from "next/router"


interface AboutProps {
  dataUser: Array<any>
}

const About = (props: AboutProps) => {
  const {dataUser} = props
  const router = useRouter()
  return (
    <Layout titlePage="about">
    <div>
      <h1>About Page</h1>
      {
        dataUser.map(el => (
          <ul key={el.id} >
            <li className="hover" onClick={() => router.push(`/detail/${el.id}`)}>{el.title}</li>
          </ul>
        ))
      }
    </div>
    </Layout>
  )
}

export default About

export const getStaticProps = async() => {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const result = await fetch(url)
  const dataUser = await result.json()
  return { props: {dataUser} }
}