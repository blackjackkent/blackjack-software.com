import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "./Home.module.scss";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Blackjack Software - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section data-id="home" className="content-section start-page">
        <div className="section-content">
          <div className="page-title">
            <h2>Projects</h2>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="portfolio-content">
                <div className="portfolio-grid three-columns">
                  <figure className="item">
                    <div className="portfolio-item-header">
                      <i className="fa fa-laptop-code"></i>
                      <h4 className="name">RPThreadTracker</h4>
                      <a href="http://www.rpthreadtracker.com">
                        http://www.rpthreadtracker.com
                      </a>
                    </div>
                    <p>
                      A web application established in 2012, offering tools
                      supporting RPers and collaborative writers on Tumblr.
                    </p>
                  </figure>
                  <figure className="item">
                    <div className="portfolio-item-header">
                      <i className="fa fa-laptop-code"></i>
                      <h4 className="name">React Multivalue Text Input</h4>
                      <a href="https://www.npmjs.com/package/react-multivalue-text-input">
                        https://www.npmjs.com/package/react-multivalue-text-input
                      </a>
                    </div>
                    <p>
                      A text input component for React which maintains and
                      displays a collection of entered values as an array of
                      strings.
                    </p>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
