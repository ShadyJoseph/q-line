import React from 'react';

const Footer = ({
  logo = {
    src: "https://shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Q-Line",
    url: "https://www.shadcnblocks.com",
  },
  tagline = "Printing Easy and Fast",
  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2024 Q-Line. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}) => {
  return (
    React.createElement('section', { className: 'py-32' },
      React.createElement('div', { className: 'full-width-container' }, // Changed from 'container' to 'full-width-container'
        React.createElement('footer', null,
          React.createElement('div', { className: 'grid grid-cols-2 gap-8 lg:grid-cols-6' },
            React.createElement('div', { className: 'col-span-2 mb-8 lg:mb-0' },
              React.createElement('div', { className: 'flex items-center gap-2 lg:justify-start' },
                React.createElement('a', { href: 'https://shadcnblocks.com' },
                  React.createElement('img', {
                    src: logo.src,
                    alt: logo.alt,
                    title: logo.title,
                    className: 'h-10'
                  })
                ),
                React.createElement('p', { className: 'text-xl font-semibold' }, logo.title)
              ),
              React.createElement('p', { className: 'mt-4 font-bold' }, tagline)
            ),
            menuItems.map((section, sectionIdx) =>
              React.createElement('div', { key: sectionIdx },
                React.createElement('h3', { className: 'mb-4 font-bold' }, section.title),
                React.createElement('ul', { className: 'space-y-4 text-muted-foreground' },
                  section.links.map((link, linkIdx) =>
                    React.createElement('li', {
                      key: linkIdx,
                      className: 'font-medium hover:text-primary'
                    },
                      React.createElement('a', { href: link.url }, link.text)
                    )
                  )
                )
              )
            )
          ),
          React.createElement('div', {
            className: 'mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center'
          },
            React.createElement('p', null, copyright),
            React.createElement('ul', { className: 'flex gap-4' },
              bottomLinks.map((link, linkIdx) =>
                React.createElement('li', {
                  key: linkIdx,
                  className: 'underline hover:text-primary'
                },
                  React.createElement('a', { href: link.url }, link.text)
                )
              )
            )
          )
        )
      )
    )
  );
};

export default Footer;