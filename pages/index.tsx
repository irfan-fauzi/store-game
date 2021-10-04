import type { NextPage } from 'next'
import Layout from '../components/layout'
import Image from 'next/image'

const Home: NextPage = () => {
  return (

  <Layout titlePage="home">
   <div>
     <h1>Home Page</h1>
     <Image src="/1.jpg" width={600} height={400} alt="profile"/>
     <p>img normal : </p>
     
      <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi saepe aperiam voluptate quae sapiente ut? Beatae, aliquid atque porro voluptatem mollitia ad, quia ab eveniet distinctio nihil aut ex fugit doloribus? Iste molestias aliquam omnis veniam beatae aperiam est assumenda doloremque laudantium, illum deleniti quisquam amet! Error tempora repellat, aut enim cumque, non ullam quis quas qui quidem reprehenderit ab voluptatibus labore! Et, magni illo! Deleniti aliquam tempora necessitatibus nam natus modi suscipit atque ipsum. Aliquam temporibus in officiis laboriosam inventore totam ipsum iste vitae ducimus dolorem rem, dolor repellat doloribus eius alias veniam omnis! Saepe nemo ducimus adipisci! Autem?</h4>
      
   </div>
  </Layout>
  )
}

export default Home
