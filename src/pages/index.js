import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import config from '../../docusaurus.config';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <button  style={{backgroundColor:"transparent", borderWidth:"0px"}}onClick={()=>{
          window.open("https://gamespaces.xyz")
        }}>
        <p className="hero__subtitle" style={{color:'black', fontFamily:'Black Ops One'}}>{siteConfig.tagline}</p>
        </button>
        <div className={styles.buttons} style={{marginTop:'30px'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Head over to Docs
          </Link>
        </div>
        {/* <div>

        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The Most Disrupting Game Ad-Engine<head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div style={{display:'flex', flexDirection:"row", justifyContent:'center', marginTop:'20px'}}>
          <div style={{display:"flex", alignSelf:"center", width:"90%", alignSelf:'center', justifyContent:"center", overflow:'hidden'}}>
            <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
              <source src={"/videos/Amazon-Demo.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/OnePlus-Demo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/Bingo-Demo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/Jio-Demo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/Swiggy-Demo-2.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video height="390" style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/Swiggy-Demo-1.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video height="390"  style={{borderRadius:"10px", marginRight:'10px'}} autoPlay loop muted>
            <source src={"/videos/SS-Demo.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
      </main>
    </Layout>
  );
}
