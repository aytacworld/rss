function renderItem(item) {
  return [
    '<item>',
    `<title>${item.title}</title>`,
    `<link>${item.link}</link>`,
    `<guid>${item.guid}</guid>`,
    `<pubDate>${item.pubDate.toGMTString()}</pubDate>`,
    `<description>${item.description}</description>`,
    '</item>',
  ].join('');
}

function renderItems(items) {
  return items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
    .map(i => renderItem(i)).join('');
}

function renderChannel(channel) {
  return [
    '<channel>',
    `<atom:link href="${channel.atomLink}" rel="self" type="application/rss+xml" />`,
    `<title>${channel.title}</title>`,
    `<link>${channel.link}</link>`,
    `<description>${channel.description}</description>`,
    renderItems(channel.items),
    '</channel>',
  ].join('');
}

function render(channel) {
  return [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    renderChannel(channel),
    '</rss>',
  ].join('');
}

module.exports = render;
