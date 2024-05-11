import React from 'react'
import { AboutUsContainer,AboutCard,AboutContent,AboutDescription,PersonImage,Heading,Section,Image} from "../components/abut";
import Imagee from '../Assets/logo.jpg'
 
function About() {
  return (
    <div>

    <AboutUsContainer>
    <h1>About Us</h1><br/>
    <AboutDescription>
<Section>
  <Image src={Imagee}/>
  <Heading>Recipe Book</Heading>
  <h2>We are a team of passionate food enthusiasts dedicated to sharing and discovering delicious recipes from around the world. Whether you're a cooking novice or a seasoned chef, RecipeBook is your go-to destination for finding, saving, and sharing your favorite recipes.

Our mission is to inspire and empower people to cook homemade meals with confidence and creativity. From quick and easy weekday dinners to special occasion showstoppers, we've got you covered with a diverse collection of recipes for every taste and occasion.

Join our community today and start exploring the world of culinary delights with RecipeBook!</h2>
</Section>
</AboutDescription>
    <br/>

  <h1>Our Team</h1>

  <AboutContent>
  
    <AboutCard>
      <PersonImage src="/bg-image.jpg" alt="Person 1" />
      <p><strong>Biraj Maharjan</strong></p>
      <p>Lalitpur,Kathmandu</p>
      <p>+977-9999999999</p>
      <p>birajmaharjan@gmail.com</p>
    </AboutCard>
    <AboutCard>
      <PersonImage src="/bg-image.jpg" alt="Person 2" />
      <p><strong>Achyut Gyawali</strong></p>
      <p>Bhaktapur,Kathmandu</p>
      <p>+977-9999999999</p>
      <p>achyutgyawali777@gmail.com</p>
    </AboutCard>
  </AboutContent>
</AboutUsContainer>
</div>

  )
}

export default About