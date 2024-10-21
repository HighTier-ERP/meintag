const InformationPage = ({ year }: any) => {
  return (
    <div className="flex-row flex-wrap">
      <div className="column">
        <div className="border-bottom">
          <h1>
            Ready to use <br /> MTM Design System components.
          </h1>
        </div>
        <br />
        <div className="flex-row">
          <div>
            <h2> Version {process.env.npm_package_version}</h2>
            <p className="copyright">CTMT © {year}</p>
          </div>
          <p className="copyright">
            3 &nbsp;
            <span className="text-sm text-white/60">Contributors</span>
          </p>
        </div>
        <div className="canvas-card">
          <div className="canvas-card-item">
            <h4>System Requirements</h4>
          </div>
          <div className="flex-no-wrap">
            <div className="canvas-card-item">
              <div className="full-width">
                <strong>GIT:</strong> <br /> v2.13 or greater
              </div>
            </div>
            <div className="canvas-card-item">
              <div className="full-width">
                <strong>NODEJS:</strong> <br /> 14 || 16 || 18
              </div>
            </div>
            <div className="canvas-card-item">
              <div className="full-width">
                <strong>NPM:</strong> <br /> v8.16.0 or greater
              </div>
            </div>
          </div>
          <br />
        </div>
        <br />
        <div className="canvas-card">
          <div className="canvas-card-item">
            <h4>Required Base Versions</h4>
          </div>
          <div className="flex-no-wrap">
            <div className="canvas-card-item">
              <div className="full-width">
                <strong>React:</strong> <br /> 18.2.0{' '}
              </div>
            </div>
            <div className="canvas-card-item">
              <div className="full-width">
                <strong>Typescript:</strong> <br /> 5.4.3
              </div>
            </div>
            <div className="canvas-card-item">
              <div>
                <strong>Next:</strong> <br /> 14.2.2
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="body column">
        <h2>What is the Phoenix Component Library?</h2>
        <p>
          PCL is an open-source React component library that implements MTM Design System. It&apos;s
          comprehensive and currently under development.
        </p>

        <h2> Install PCL</h2>
        <p>The PCL is a standalone npm package hosted on github.</p>
        <p>
          It&apos;s a zero-config libaray that works with any modern react framework. You can
          install the PCL into an existing project or create a new one from scratch.
        </p>
        <p>To start: create an .npmrc with the below contents in your projects root folder</p>
        <div className="canvas-card">
          <code style={{ flexDirection: 'column' }}>
            <p>legacy-peer-deps=true</p>
            <p>{`//npm.pkg.github.com/:_authToken={githubauthtoken}`}</p>
            <p>@consortiumnetworksllc:registry=https://npm.pkg.github.com</p>
          </code>
        </div>
        <p>Then run</p>
        <div className="canvas-card">
          <p>npm i @consortiumnetworksllc/phoenix-component-library</p>
        </div>
        <h2>What is the MTM Design system?</h2>

        <p>
          The MTM design system prioritizes Clarity and Precision for clear, accurate data
          presentation, and Professionalism and Trust for a secure, polished environment. Efficiency
          is key, with intuitive interfaces that simplify navigation and minimize the learning
          curve. Responsive Design ensures seamless functionality across all devices, while
          Effective Data Visualization employs innovative visuals to demystify complex cyber spend
          analytics. Security Emphasis reinforces data protection, and Customizable Dashboards allow
          for personalized displays. This system is your gateway to an optimized and secure digital
          experience.
        </p>
        <div className="flex-row gap">
        </div>
      </div>
    </div>
  )
}

export default InformationPage
