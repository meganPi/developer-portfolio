//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
	    <h1>Welcome To My Developer Portfolio</h1>
	    <Image src="/static/images/mountains.jpg/" fluid />
		< style jsx> {`
			h1 {
				color: white;
				margin-top: 40px;
				margin-bottom: 30px;
				margin-left: 50px;
				text-align: center;
			}
		`} </ style >
		< style global jsx> {`
			body {
				background: grey;
			}
		`} </ style >
  	</Layout>
)