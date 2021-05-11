
const colors = [
  '#1f77b4',
  '#ff7f0e',
  '#2ca02c',
  '#d62728',
  '#9467bd',
  '#8c564b',
  '#e377c2',
  '#7f7f7f',
  '#bcbd22',
  '#17becf'
];
document.addEventListener('DOMContentLoaded', function () {

  var styles = {
    "type1": { "color": "#CFA79D", "arrowShape": "triangle" },
    "type2": { "color": "#9DCFA7", "arrowShape": "triangle" },
    "type3": { "color": "#A79DCF", "arrowShape": "triangle" },

  };
  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    layout: {
      name: 'breadthfirst',

    },

    style: [
      {
        selector: 'node',
        style: {
      'border-color': '#ffffff',
      'border-width': 2,
      'background-image': 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1536 1399q0 109-62.5 187t-150.5 78h-854q-88 0-150.5-78t-62.5-187q0-85 8.5-160.5t31.5-152 58.5-131 94-89 134.5-34.5q131 128 313 128t313-128q76 0 134.5 34.5t94 89 58.5 131 31.5 152 8.5 160.5zm-256-887q0 159-112.5 271.5t-271.5 112.5-271.5-112.5-112.5-271.5 112.5-271.5 271.5-112.5 271.5 112.5 112.5 271.5z" fill="#fff"/></svg>`),
      'background-width': '60%',
      'background-height': '60%',
      'color': '#333333',
      'width': '4em',
      'height': '4em',
      'label': 'data(name)',
      'text-valign': 'bottom',
      'text-margin-y': 6,
      'text-background-color': '#ffffff',
      'text-background-opacity': 0.5,
      'text-background-padding': 4,
          //'label': 'data(id)'
        }
      },
      ...colors.map((color, group) => ({
        selector: `node[group=${group}]`,
        style: {
          'background-color': color
        }
      })),

      {
    selector: 'node.hover',
    style: {
      'border-color': '#000000',
      'text-background-color': '#eeeeee',
      'text-background-opacity': 1
    }
  },
  {
    selector: 'node:selected',
    style: {
      'border-color': '#ff0000',
      'background-color': '#b3b3b3',
      'border-width': 6,
      'border-opacity': 0.5
    }
  },

      {
        selector: ':parent',
        style: {
          'background-opacity': 0.333
        }
      },



      {
        selector: 'edge[edgeType="type1"]',
        style: {
          'line-color': styles["type1"].color,
          'curve-style': 'bezier',
          'target-arrow-shape': styles["type1"].arrowShape,
          'target-arrow-color': styles["type1"].color,


        }
      },
      {
        selector: 'edge[edgeType="type2"]',
        style: {
          'line-color': styles["type2"].color,
          'curve-style': 'bezier',
          'target-arrow-shape': styles["type2"].arrowShape,
          'target-arrow-color': styles["type2"].color,


        }
      },
      {
        selector: 'edge[edgeType="type3"]',
        style: {
          'line-color': styles["type3"].color,
          'curve-style': 'bezier',
          'target-arrow-shape': styles["type3"].arrowShape,
          'target-arrow-color': styles["type3"].color,


        }
      },
      {
        selector: 'edge',
        style: {
          'label': 'data(edgeType)',
          'width': 5,
          'font-size': 12,
          'color': '#000',
          'text-outline-color': 'white',
          'text-outline-width': 4,

        }
      },

      {
        selector: 'edge.cy-expand-collapse-collapsed-edge',
        style:
        {
          "label": 'data(edgeType)',
          // 'width': function (edge) {
          //   return 1 + Math.round(((Math.log(edge.data("collapsedEdges").length) / Math.log(3) + Number.EPSILON)) * 100) / 100;
          // },
          'line-color': function (edge) {
            if (edge.data("edgeType") == "unknown") {
              return '#b3b3b3'
            } else {
              return styles[edge.data("edgeType")].color;
            }

          },
          'line-style': 'dashed',
          'target-arrow-shape': function (edge) {
            if (edge.data("edgeType") == "unknown") {
              return "chevron"
            } else {
              return styles[edge.data("edgeType")].arrowShape;
            }
          },

          'curve-style': 'bezier',

          'target-arrow-color': function (edge) {
            if (edge.data("edgeType") == "unknown") {
              return '#b3b3b3'
            } else {
              return styles[edge.data("edgeType")].color;
            }

          },

          'target-arrow-color': function (edge) {
            if (edge.data("edgeType") == "unknown") {
              return '#b3b3b3'
            } else {
              return styles[edge.data("edgeType")].color;
            }

          },

          'source-arrow-shape': function (edge) {
            if (edge.data("directionType") == "unidirection") return undefined;
            if (edge.data("edgeType") == "unknown") {
              return "chevron"
            } else {
              return styles[edge.data("edgeType")].arrowShape;
            }

          },
          'source-arrow-color': function (edge) {
            if (edge.data("directionType") == "unidirection") return undefined;
            if (edge.data("edgeType") == "unknown") {
              return '#b3b3b3'
            } else {
              return styles[edge.data("edgeType")].color;
            }

          },

        }
      }

      ,
      {
        selector: 'node:selected',
        style: {
          "border-width": 1,
          "border-color": '#FF00FF'
        }
      },
      {
        selector: 'edge:selected',
        style: {
          "width": 1,
          "line-color": '#FF00FF',
          "target-arrow-color": '#FF00FF',
          "source-arrow-color": '#FF00FF'

        }
      }
    ],

    elements: {
      nodes: [{
        data: {
          id: 'n00a',
          name: 'Jane',
          group: 1
        }
      },
      {
        data: {
          id: 'n00b',
          name: 'Jin',
          group: 3
        }
      },
      {
        data: {
          id: 'n00c',
          name: 'Marcus',
          group: 2
        }
      },
      {
        data: {
          id: 'n00d',
          name: 'Nadia',
          group: 3
        }
      },
      {
        data: {
          id: 'n00e',
          name: 'McHammer',
          group: 2
        }
      },
      {
        data: {
          id: 'n00f',
          name: 'Ann',
          group: 1
        }
      },
      ],
      edges: [{
        data: { id: 'e0', source: 'n00a', target: 'n00b', edgeType: "type1" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e1', source: 'n00a', target: 'n00b', edgeType: "type1" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e3', source: 'n00b', target: 'n00a', edgeType: "type1" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e4', source: 'n00c', target: 'n00d', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e5', source: 'n00d', target: 'n00c', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e6', source: 'n00a', target: 'n00f', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e7', source: 'n00b', target: 'n00a', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e8', source: 'n00b', target: 'n00a', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e9', source: 'n00b', target: 'n00a', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e10', source: 'n00d', target: 'n00e', edgeType: "type1" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e11', source: 'n00d', target: 'n00e', edgeType: "type3" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e12', source: 'n00e', target: 'n00d', edgeType: "type3" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e13', source: 'n00f', target: 'n00b', edgeType: "type3" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e14', source: 'n00b', target: 'n00f', edgeType: "type3" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e15', source: 'n00c', target: 'n00f', edgeType: "type1" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e16', source: 'n00c', target: 'n00f', edgeType: "type2" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e17', source: 'n00c', target: 'n00f', edgeType: "type3" }, selectable: true, unselectable: false
      },
      {
        data: { id: 'e29', source: 'n00c', target: 'n00f', edgeType: "type1" }, selectable: true, unselectable: false
      },
      ]
    },
  });

  var ur = cy.undoRedo();

  var api = cy.expandCollapse({

    expandCueImage: "icon-plus.png",
    collapseCueImage: "icon-minus.png"
  });


  document.getElementById("collapseAll").addEventListener("click", function () {
    ur.do("collapseAllEdges", {
      options: { groupEdgesOfSameTypeOnCollapse: true, allowNestedEdgeCollapse: true }
    });
  });

  document.getElementById("collapseEdgesBetweenNodes").addEventListener("click", function () {
    var nodes = cy.nodes(":selected");
    if (nodes.length >= 2) {
      ur.do("collapseEdgesBetweenNodes", {
        nodes: nodes,
        options: { groupEdgesOfSameTypeOnCollapse: true, allowNestedEdgeCollapse: true }
      });
    }
  });

  document.getElementById("expandEdgesBetweenNodes").addEventListener("click", function () {
    var nodes = cy.nodes(":selected");
    if (nodes.length >= 2) {
      ur.do("expandEdgesBetweenNodes", {
        nodes: nodes,
      });
    }
  });

  document.getElementById("expandAll").addEventListener("click", function () {
    if (cy.edges(".cy-expand-collapse-collapsed-edge").length > 0) {
      ur.do("expandAllEdges", {});
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.which == '90') {
      cy.undoRedo().undo();
    }
    else if (e.ctrlKey && e.which == '89') {
      cy.undoRedo().redo();
    }
  }, true);

});