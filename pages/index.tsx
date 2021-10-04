
import Layout from '../components/layout'


interface AboutProps {
  dataUser: Array<any>
}

const Home = (props: AboutProps) => {
  const {dataUser} = props
  
  return (
  <Layout titlePage="home">
   <div>
     <h1>Home Page</h1>
        {
          dataUser.map(el => (
            <ul key={el.id} >
              <li className="hover">{el.title}</li>
            </ul>
          ))
        }
     
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi saepe aperiam voluptate quae sapiente ut? Beatae, aliquid atque porro voluptatem mollitia ad, quia ab eveniet distinctio nihil aut ex fugit doloribus? Iste molestias aliquam omnis veniam beatae aperiam est assumenda doloremque laudantium, illum deleniti quisquam amet! Error tempora repellat, aut enim cumque, non ullam quis quas qui quidem reprehenderit ab voluptatibus labore! Et, magni illo! Deleniti aliquam tempora necessitatibus nam natus modi suscipit atque ipsum. Aliquam temporibus in officiis laboriosam inventore totam ipsum iste vitae ducimus dolorem rem, dolor repellat doloribus eius alias veniam omnis! Saepe nemo ducimus adipisci! Autem?</h4>
      
   </div>
  </Layout>
  )
}

export default Home

export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts"
  const result = await fetch(url)
  const dataUser = await result.json()
  return { props: { dataUser } }
}
