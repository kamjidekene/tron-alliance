import type { NextPage } from "next";
import { Layout } from "../modules/app/components/Layout";

const Develop: NextPage = () => {
  return (
    <div>
      <Layout>
        <main className="main">
          <h1 className="title appear">Developer Kit</h1>

          <h2 className="appear d125">Tron Documentation</h2>
          <p className="appear d150">
            Looking for information for developing on Arbitrum? The official documentation can be found {" "}
            <a href="https://docs.Tron.org/#/">
              here
            </a>.
          </p>

          <h2 className="appear d025">Tron Testnet</h2>
          <p className="appear d05">
            Tron has it&apos;s own testnet (chain id: 9000) that you can
            add here:{" "}
            <a href="https://chainlist.org/">https://chainlist.org/</a>.
            Transactions can be visualized through{" "}
            <a href="https://evm.Tron.dev/">
            https://evm.Tron.dev/
            </a>.
          </p>

          <h2 className="appear d075">NFT Template</h2>
          <p className="appear d1">
            The Tron Alliance created a{" "}
            <a href="https://github.com/Elvolution20/Tron_Phone_Mint/">
              NFT boilerplate
            </a>{" "}
            that you can use to launch your smartcontract and mint NFTs
          </p>
 

          <h2 className="appear d075">Tron Web3 Starter Kit</h2>
          <p className="appear d1">
            Still in Development ...
          </p>


          <h2 className="appear d075">Create Tron App</h2>
          <p className="appear d1">
            Coming Soon!!!
          </p>




        </main>
      </Layout>
      <style jsx>{`
        .main {
          padding: calc(160px + 80px) 0 0;
          max-width: 720px;
          margin: 0 auto;
        }

        .title {
          font-size: 36px;
        }

        h2 {
          font-size: 24px;
          margin: 40px 0 16px;
        }
        @media all and (max-width: 760px) {
          .main {
            padding: 120px 0 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Develop;
