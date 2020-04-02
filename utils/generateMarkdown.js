function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}
# Installing
${data.installation}
# Use Case
${data.usage}
# License
${data.lisence}
# Contributing
${data.contributing}
# Testing
${data.tests}

`;
}

module.exports = generateMarkdown;
