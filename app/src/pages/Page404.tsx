import { Link } from 'react-router-dom'

const Page404 = () => (
  <div>
    <p>This is not the page that you are looking for!</p>
    <Link to="/" replace>
      Go Home
    </Link>
  </div>
)

export default Page404
