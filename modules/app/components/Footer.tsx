import Link from 'next/link'

export function Footer() {
  return (
    <div className="footer-wr">
      <div className="footer">
        <a
          href="https://twitter.com/TronAlliance"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter account"
        >
           Twitter
        </a>

       

        <a
          title="Join discord"
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
           Discord
        </a>

        <a
          title="GitHub"
          href="https://github.com/Tron-alliance"
          target="_blank"
          rel="noopener noreferrer"
        >
           GitHub
        </a>

      </div>
      <div style={{ padding: '30px', textAlign: 'center'}}>
        Tron Alliance
      </div>
      <style jsx>
        {`

          .footer-wr{
            border-top: 1px solid rgba(255,255,255,0.1);
            margin-top: 120px;
            padding: 40px 0;
          }
          .footer {
            color: #FFF;
            width: 100%;
            padding: 0 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer a {
            
            padding: 0 10px;
            text-transform: uppercase;
            text-decoration: none;
            color: #FFF;
          }
        `}
      </style>
    </div>
  );
}
