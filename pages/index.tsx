import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Layout } from "../modules/app/components/Layout";
import { ProjectList } from "../modules/projects/components/ProjectList";
import { allProjects, categories } from "../modules/projects/constants";
import { Button } from "../modules/app/components/Button";
import CollaborationList from "../modules/collaborations/components/CollaborationsList";

function shuffleArray(array: any[]) {
  const newArr = [...array];

  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArr[i];
      newArr[i] = newArr[j];
      newArr[j] = temp;
  }
  return newArr
}

// const shuffled = shuffleArray(allProjects)
const Home: NextPage = () => {
  const [categoriesFiltered, setCategoriesFiltered] = useState<string[]>([]);

  
  const [projects, setProjects] = useState(allProjects)
  const toggleCategory = (category: string) => {
    setCategoriesFiltered(
      categoriesFiltered.includes(category)
        ? categoriesFiltered.filter((i) => i !== category)
        : [...categoriesFiltered, category]
    );
  };

  const filteredProjects = categoriesFiltered.length > 0 ? projects.filter(
    (i) => i.categories.filter((c) => categoriesFiltered.includes(c)).length > 0
  ): projects

  useEffect(() => {
    setProjects([...(shuffleArray(projects))])
  }, [])



  return (
    <div>
      <Layout>
        <main className="main">
          <section className="hero" id="home">
            <div className="container">
              <div className="hero-content">
                <h1 className="title appear d025">
                  <small><i>👋 Welcome to the</i></small>
                  <span>Tron Alliance.</span> 
                </h1>
                <h2 className="subtitle appear d05">
                  We are an independent collective of <strong>Defi</strong>,{" "}
                  <strong>NFT</strong> and <strong>Marketplaces</strong>{" "}
                  founders who join forces to achieve joint goals that impact
                  the Tron ecosystem.
                </h2>
                <div className="cta appear d075">
                  <a
                    title="Join discord"
                    href="https://discord.gg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Join Us</Button>
                  </a>
                  <a href="#about" className="inline">
                  <Button>Explore</Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-info appear d1">
              <div className="hero-info-unit">
                <strong>
                  {
                    allProjects.filter((i) =>
                      i.categories.includes(categories.DEFI)
                    ).length
                  }
                </strong>
                <p>Defi Projects</p>
              </div>
              <div className="hero-info-unit">
                <strong>
                  {
                    allProjects.filter((i) =>
                      i.categories.includes(categories.NFT)
                    ).length
                  }
                </strong>
                <p>NFTs / Gamefi</p>
              </div>
              <div className="hero-info-unit">
                <strong>
                  {
                    allProjects.filter((i) =>
                      i.categories.includes(categories.DEX)
                    ).length
                  }
                </strong>
                <p>DEXES</p>
              </div>
              <div className="hero-info-unit">
                <strong>
                  {
                    allProjects.filter((i) =>
                      i.categories.includes(categories.INFRASTRUCTURE)
                    ).length
                  }
                </strong>
                <p>Infrastructures</p>
              </div>
            </div>
          </section>

          <div className="about" id="about">
            <div>
              <h3>Crypto projects are always finding new ways to disrupt the world around them,
                 whether it's in art, finance, aerospace, or food. Increasingly,
                  crypto is disrupting how communities affect companies.
                  
</h3>
            </div>
            <div className="about-section">
              <strong>01</strong>
              <div className="content">
                <h3>What is the Tron Alliance?</h3>
                <p>
                  The Tron Alliance is a working group formed by different
                  projects on Tron Ecosystem which aim to join efforts to grow communities and
                  the projects on the ecosystem.
                </p>
              </div>
            </div>
            <div className="about-section">
              <strong>02</strong>
              <div className="content">
                <h3>How can I join the Tron Alliance?</h3>
                <p>
                  If you are a Tron project founder, builder,and Supporter you can join our
                  Discord and apply. Note: Applications are based on the support on the growth of the Ecosystem.
                </p>
              </div>
            </div>
            <div className="about-section">
              <strong>03</strong>
              <div className="content">
                <h3>What will the Tron Alliance do ?</h3>
                <p>
                  We&apos;ll build exclusive products on Tron which leverage
                  the Tron technology. Participating in projects
                  of the alliance will give you access to exclusive content so
                  grab some now. <br />
                  This guide is intended to be helpful project founder, builders,and supporters to understand: <br />
                  (i) how to get registered on TronAlliance services; and <br />
                  (ii) how to leverage TronAlliance's features for the best experience.

                </p>
              </div>
            </div>
          </div>

          <div className="projects-wrapper" id="projects">
            <h3>TRON ALLIANCE</h3>
            <div className="filter-categories">
              <div className="filter-categories-items">
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.DEFI)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.DEFI)}
                >
                  DEFI PROJECTS
                </div>
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.NFT)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.NFT)}
                >
                  NFT / GAMEFI
                </div>

                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.DEX)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.DEX)}
                >
                  DEXES
                </div>
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.INFRASTRUCTURE)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.INFRASTRUCTURE)}
                >
                  INFRASTRUCTURES
                </div>
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.BRIDGE)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.BRIDGE)}
                >
                  BRIDGE
                </div>
                <div
                  className={`category ${
                    categoriesFiltered.includes(categories.HACKATHON)
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => toggleCategory(categories.HACKATHON)}
                >
                  HACKATHON
                </div>
              </div>
            </div>
            <ProjectList projects={filteredProjects} />

            <CollaborationList />
          </div>
        </main>
      </Layout>
      <style jsx>{`
        .main {
          padding: 0;

        }
        @media all and (max-width: 760px){
          .main{
            padding: 24px;
          }
        }
        

        .hero {
          color: var(--text-main-color);
          background: var(--page-background-color);
          display: flex;
          flex-flow: column;
          justify-content: space-between;
          padding: calc(180px + 90px) 0 0;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        @media all and (max-width: 760px){
          .hero{
             padding: 180px 0 0;
          }
        }

        .hero:before, .hero:after{
          animation: circleAf 16s linear infinite forwards;
          border: 3px dashed #7514fc8f;
          border-radius: 50%;
          bottom: 0;
          //content: '';
          height: 30vw;
          position: fixed;
          transform: translate(20%, 50%);
          transform-origin-center;
          right: 0;
          width: 30vw;
        }

        @keyframes circleAf{
          to{
            transform: translate(20%, 50%) rotate(-360deg);
          }
        }

        .hero:before{
          animation: circleBf 16s linear infinite forwards;
          border-color: rgba(255,255,255,0.1);
          right: auto;
          height: 40vw;
          width: 40vw;
          left: 0;
          bottom: auto;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        @keyframes circleBf{
          to{
            transform: translate(-50%, -50%) rotate(-360deg);
          }
        }

        .hero .container {
          align-items: center;
          display: flex;
          justify-content: flex-start;
          margin: 0 auto;
          max-width: 720px;
          height: 100%;
        }

        .hero-content {
          padding-bottom: 80px;
          text-align: left;
          width: 100%;
        }

        .hero-content .title {
          font-size: 70px;
          line-height: 1;
        }

        .hero-content .title small {
          font-size: 14px;
          display: block;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .hero-content .title span {
          display: inline-block;
          font-family: "Space Mono", monospace;
        }

        .hero-content .title i{
          color: #de492d;
        }

        .hero-content .subtitle {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          margin: 48px 0;
          width: 80%;
        }

        .hero-content .subtitle strong {
          color: #de492d;
          opacity: 1;
          text-decoration: underline;
          font-style: italic;
        }

        .hero-info{
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          max-width: 720px;
          width: 100%;
          flex-wrap: wrap;
        }

        .hero-info-unit{
          align-items: center;
          border: 1px solid #de492d;
          display: flex;
          padding: 16px 24px;
          margin: 0;
          position: relative;
          flex-flow: column;
          flex: 1;
          z-index: 1;
        }

        .hero-info-unit strong{
          font-size: 32px;
          line-height: 1;
        }

        .hero-info-unit p{
          font-size: 12px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        @media all and (max-width: 650px) {
          .hero-content .title {
            font-size: 42px;
            line-height: 1;
          }

          .hero-info {
            flex-direction: column;
          }

          .hero-info-unit {
            width: 100%;
          }
        }

        .cta a{
          margin-right: 24px;
        }

        .main{
          background-color: var(--page-background-color);
          color: var(--text-main-color);
        }

        .description {
          margin: 4rem 0;
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .projects-wrapper,
        .about {
          max-width: 720px;
          margin: 0 auto;
          padding: 120px 0;
          width: 100%;
        }

        .projects-wrapper h3{
          font-size: 24px;
        }

        .filter-categories{
          display: flex;
          margin: 16px 0 80px;
        }

        .filter-categories-items {
          display: flex;
        }

        .category {
          background: grey;
          padding: 2px 16px;
          border-radius: 10px;
          font-weight: 600;
          margin-right: 10px;
          color: white;
          cursor: pointer;
        }

        .about-section{
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          padding: 40px 0;
          justify-content: space-between;
        }

        .about-section strong{
          font-size: 24px;
        }

        .about-section .content{
          width: 70%;
        }

        @media all and (max-width: 760px){
          .about-section{
            align-items: flex-start;
            flex-flow: column;
          }

          .about-section .content{
            width: 100%;
          }
        }

        .about-section .content h3{
          display: block;
          font-size: 21px;
          margin-bottom: 24px;
        }

        .category.selected {
          background: #FFF;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default Home;
