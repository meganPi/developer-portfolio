//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
  <Layout>
    <h1>Who Is Megan Pieterse</h1>
        <p> I’m a graphic designer who’s delivered creative and engaging solutions across 
            brand identity, print, and digital media for small business owners to larger companies.
        </p>
    <h2>Education</h2>
    <ul>
      <li>Pretoria High School for Girls 2011 - 2015</li>
      <li>Beaulieu Equestrian Academy (EQASA Modules 1,2 & 3) 2017</li>
      <li>HyperionDev Full-Stack Web Development 2021</li>
    </ul>
    <h2>Career</h2>
    <ul>
      <li>Freelance Graphic Designer 2018 - 2020</li>
      <li>Graphic Designer at Ideation Digital 2020 - present</li>
    </ul>
    <h2>My Passions</h2>
      <p> I am passionate about digital design, and I strive to create the best work for my clients to help 
          them achieve their goals on all the digital platforms.
          My clients' success is what motivates me and drives me to create the best possible designs for every 
          industry to optimise my clients brand awareness and reach. I would like to combine my graphic design 
          skills and my newly found web development skills to create amazing and engaging websites for my clients.
      </p>
    < style jsx> {`
			h1 {
				color: white;
				margin-top: 40px;
				margin-bottom: 30px;
				margin-left: 50px;
				text-align: left;
      }
      h2 {
        color: white;
        margin-left: 50px;
      }
      p {
        color: white;
        margin-left: 50px;
      }
      ul {
        color: black;
        margin-left: 50px;
      }
		`} </ style >
		< style global jsx> {`
			body {
				background: grey;
			}
		`} </ style >
  </Layout>
)