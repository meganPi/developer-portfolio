//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
	    <h1>Contact Me</h1>
        <h2>Megan Pieterse</h2>
        <h4>Email</h4>
        	<p>meg.pieterse@gmail.com</p>
        <h4>Contact Number</h4>
        	<p>082 850 3409</p>
		< style jsx> {`
			h1 {
				color: white;
				margin-top: 40px;
				margin-bottom: 10px;
				margin-left: 50px;
				text-align: center;
            }
            h2 {
                color: white;
				margin-bottom: 30px;
				margin-left: 50px;
                text-align: center;
                border: solid 1px white;
            }
            h4 {
                color: white;
				margin-left: 50px;
				text-align: center;
			}
			p {
                color: white;
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