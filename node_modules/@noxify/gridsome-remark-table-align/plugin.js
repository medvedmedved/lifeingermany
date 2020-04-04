var visit = require('unist-util-visit');

module.exports = function (options) {
  return async function transform(tree) {
    visit(tree, 'table', visitor);
  }
}

function visitor(node) {

  try {
    const alignment = node.align;

    visit(node, 'tableRow', (rowNode) => {
      rowNode.children.forEach(function (cellNode, index) {
        cellNode.align = alignment[index]
      });
    });

    node.align = node.align.map(function(value) {
      return null;
    });
    
  } catch (e) {
  }
}