// import localFont from "@next/font/local";
import "../styles/globals.css";
// Font files can be colocated inside of `pages`
// const NeufileGrotesk = localFont({
//   src: [
//     {
//       path: "../public/assets/fonts/NeufileGrotesk-Regular.eot",
//       style: "normal",
//     },
//   ],
// });

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}
// className={NeufileGrotesk.className}
