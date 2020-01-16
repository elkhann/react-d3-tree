import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "Barbara Mayers",
    attributes: {
      title: "Barbara Mayers",
      subtitle: "Some info",
      text: "Brain 52"
    },
    children: [
      {
        name: "John Mayers",
        attributes: {
          title: "John Mayers",
          text: ""
        },
        children: [
          {
            name: "",
            attributes: {
              title: "James Mayers",
              text: ""
            },
            children: [
              {
                name: "",
                attributes: {
                  title: "Jason Mayers",
                  text: ""
                }
              },
              {
                name: "",
                attributes: {
                  title: "Linda Mayers",
                  text: ""
                }
              }
            ]
          }
        ]
      },
      {
        name: "",
        attributes: {
          title: "Brianna Mayers",
          text: ""
        }
      }
    ]
  }
];

const containerStyles = {
  width: "100%",
  height: "100vh"
};

const Node = ({ nodeData }) => (
  <div>
    <div className="node">
      <div
        className="node-header"
        style={{
          border: "1px solid black",
          height: "50px",
          width: "50px",
          margin: "auto",
          background: "white"
        }}
      ></div>
      <div className="node-body">
        <p
          className="card-title"
          style={{
            margin: "auto",
            width: "8em",
            textAlign: "center",
            background: "white"
          }}
        >
          {nodeData.attributes.title}
        </p>
        <p
          style={{
            margin: "auto",
            width: "8em",
            textAlign: "center",
            background: "white"
          }}
          className="card-text"
        >
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);

const svgSquare = {
  shape: "none",
  shapeProps: {
    width: 50,
    height: 50,
    y: 0,
    x: -25
  }
};

export default class CenteredTree extends React.PureComponent {
  state = {};

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          zoomable={true}
          orientation="vertical"
          pathFunc="straight"
          scaleExtent={{ min: 1, max: 4 }}
          allowForeignObjects
          nodeSvgShape={svgSquare}
          translate={{ x: 400, y: 200 }}
          nodeSize={{ x: 300, y: 200 }}
          nodeLabelComponent={{
            render: <Node />,
            foreignObjectWrapper: {
              style: {
                width: "150px",
                height: "90px",
                x: -75,
                y: -25
              }
            }
          }}
        />
      </div>
    );
  }
}
