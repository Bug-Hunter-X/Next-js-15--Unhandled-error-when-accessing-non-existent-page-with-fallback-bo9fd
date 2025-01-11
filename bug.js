```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the about.js page is not found.
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/about.js

export default function handler(req, res) {
  res.status(200).json({ message: 'This is the about page' });
}
```