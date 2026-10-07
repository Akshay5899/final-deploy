const deployments = [
  {
    name: "Production",
    status: "Deployed",
    detail: "main · a82fc91 · 2 minutes ago",
  },
  {
    name: "Preview — new-checkout",
    status: "Ready",
    detail: "pull request #24 · 8 minutes ago",
  },
  {
    name: "Staging",
    status: "Deployed",
    detail: "develop · 3b17e42 · 16 minutes ago",
  },
];

const features = [
  {
    number: "01",
    title: "Automate every build",
    description:
      "Turn code changes into repeatable checks and dependable releases.",
  },
  {
    number: "02",
    title: "Know what’s happening",
    description:
      "See deployment status at a glance, from pull request to production.",
  },
  {
    number: "03",
    title: "Release with confidence",
    description:
      "Catch issues earlier and get a clear path to your next release.",
  },
];

function DeploymentCard() {
  return (
    <aside
      className="terminal"
      id="deployments"
      aria-label="Recent deployments"
    >
      <div className="terminal-top">
        <span className="terminal-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal-label">LATEST DEPLOYMENTS</span>
      </div>
      {deployments.map((deployment) => (
        <div className="deployment" key={deployment.name}>
          <div className="deployment-heading">
            <span className="deployment-name">{deployment.name}</span>
            <span className="status">{deployment.status}</span>
          </div>
          <div className="deployment-detail">{deployment.detail}</div>
        </div>
      ))}
    </aside>
  );
}

function App() {
  return (
    <div className="page">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#" aria-label="Launchpad home">
          <span className="brand-mark" aria-hidden="true">
            ↗
          </span>
          launchpad
        </a>
        <a className="nav-link" href="#features">
          How it works
        </a>
      </nav>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow">Your next release starts here</p>
            <h1 id="hero-title">
              Ship faster.
              <br />
              <span>Worry less.</span>
            </h1>
            <p className="intro">
              A smooth path from your first commit to production. Keep every
              build moving and every deployment in view.
            </p>
            <div className="actions">
              <a className="button" href="#features">
                Explore the workflow
              </a>
              <a className="text-link" href="#deployments">
                See a deployment&nbsp;→
              </a>
            </div>
          </div>
          <DeploymentCard />
        </section>

        <section className="features" id="features" aria-label="Benefits">
          {features.map((feature) => (
            <article className="feature" key={feature.number}>
              <div className="feature-icon" aria-hidden="true">
                {feature.number}
              </div>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer">
        © 2026 Launchpad. Built for teams that ship.
      </footer>
    </div>
  );
}

export default App;
