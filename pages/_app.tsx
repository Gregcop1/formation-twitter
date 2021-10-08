import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LeftSidebar from "../components/sidebars/LeftSidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <div className="container">
            <LeftSidebar />
            <div className="main-content">
              <Component {...pageProps} />
            </div>
            <div className="sidebar-right"></div>
          </div>
          <script src="https://use.fontawesome.com/b520d6c1b0.js"></script>
      </>
  );
}
export default MyApp
