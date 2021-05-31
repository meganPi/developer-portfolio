//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'

export default () => (
<Layout>
	    <h1>My Previous Projects</h1>
        <h2>Online Shop</h2>
                <a href="https://github.com/meganPi/Capstone-Project-II">
                <p>Capstone Project II Level 1: Github (Click Me)</p></a>
            <h2>React Game</h2>
                <a href="https://github.com/meganPi/React_Game">
                <p>Capstone Project I Level 2: Github (Click Me)</p></a>
            <h2>iTunes App</h2>
                <a href="https://secure-mesa-71685.herokuapp.com/">
                <p>Capstone Project II Level 2: Heroku (Click Me)</p></a> 
            <h2>Woosh</h2>
                <a href="https://github.com/meganPi/woosh.git">
                    <p>Final Capstone Project Level 3 (Click Me)</p></a>         
		< style jsx> {`
			h1 {
				color: white;
				margin-top: 40px;
				margin-bottom: 30px;
				margin-left: 50px;
				text-align: center;
            }
            h2 {
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