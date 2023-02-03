import Script from 'next/script';

// inside the return statement of your page
const Tawk = () => (
  <>
    <Script
      strategy="lazyOnload"
      src="https://embed.tawk.to/63dc4f3d4742512879113477/default"
    />
  </>
);

export default Tawk