export const siteConfig = {
  identity: {
    name: 'Russell Watson',
    intro:
      'I combine 15 years in asset protection and security operations with hands-on software engineering to turn complex, risk-sensitive workflows into clear, resilient products.',
    email: 'russellalanwatson@gmail.com',
    linkedin: 'https://www.linkedin.com/in/r-wats3082',
    github: 'https://github.com/wats3082',
  },
  projects: [
    {
      name: 'Email Your Congressman',
      type: 'Civic technology · React application',
      image: 'email-congress.png',
      problem:
        'People need a direct path from a local concern to the correct elected representative and a useful first draft—not another maze of government websites.',
      architecture:
        'A React and TypeScript interface separates typed state, city, ZIP-range, and representative data from reusable lookup, representative-card, and email-drafting components. Vitest coverage exercises core data and UI behavior.',
      outcome:
        'A deployed multi-view workflow lets visitors locate representation, move into a structured message, and review current issues from one responsive experience.',
      stack: ['React', 'TypeScript', 'Vite', 'Vitest'],
      demo: 'https://wats3082.github.io/agentic-emailYourCongressman/',
      repo: 'https://github.com/wats3082/agentic-emailYourCongressman',
    },
    {
      name: 'Weather API v2',
      type: 'Cloud-ready data product · Full-stack TypeScript',
      image: 'weather-api-v2.png',
      problem:
        'Weather and route-turbulence context are usually fragmented across tools, adding friction for anyone trying to assess conditions quickly.',
      architecture:
        'A React/TypeScript client fronts isolated weather and turbulence workflows. The repository pairs it with TypeScript serverless handlers and AWS CDK definitions for API Gateway, Lambda, DynamoDB, and Cognito.',
      outcome:
        'The live simulator unifies city conditions and route-risk exploration while keeping the frontend, service layer, and infrastructure independently evolvable.',
      stack: ['React', 'TypeScript', 'AWS CDK', 'Serverless'],
      demo: 'https://wats3082.github.io/weather-api-v2/',
      repo: 'https://github.com/wats3082/weather-api-v2',
    },
    {
      name: 'Abyss Diver',
      type: 'Browser game · JavaScript systems design',
      image: 'abyss-diver.png',
      problem:
        'An atmospheric game concept and incomplete Python scaffold needed a frictionless, playable delivery path that worked directly in the browser.',
      architecture:
        'A web-first JavaScript build organizes boot, level, and game-over scenes around dedicated diver, shark, and reaper entities, with configuration and assets kept outside gameplay logic.',
      outcome:
        'The published survival-horror demo delivers keyboard and pointer controls, resource pressure, enemies, and a complete six-relic objective with no install required.',
      stack: ['JavaScript', 'HTML5 Canvas', 'Scene system', 'GitHub Pages'],
      demo: 'https://wats3082.github.io/Game-AbyssDiver/',
      repo: 'https://github.com/wats3082/Game-AbyssDiver',
    },
  ],
  strengths: [
    {
      number: '01',
      title: 'Security by context',
      body: 'I start with threat, impact, and operator reality so controls protect the system without fighting the people using it.',
    },
    {
      number: '02',
      title: 'Architecture with seams',
      body: 'Clear boundaries between interface, services, data, and infrastructure keep systems testable and ready to evolve.',
    },
    {
      number: '03',
      title: 'Delivery under pressure',
      body: 'Incident response and program leadership inform how I prioritize, communicate tradeoffs, and close the loop.',
    },
  ],
}
