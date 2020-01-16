import React from "react";
import Tree from "react-d3-tree";
import { findRenderedComponentWithType } from "react-dom/test-utils";

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

const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div
        style={{
          border: "1px solid black",
          height: "50px",
          width: "50px",
          margin: "auto",
          background: "white"
        }}
      ></div>
      <div className="card-body">
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

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2
      }
    });
  }

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          // translate={this.state.translate}
          zoomable={true}
          orientation="vertical"
          scaleExtent={{ min: 1, max: 3 }}
          pathFunc="step"
          allowForeignObjects
          nodeSvgShape={svgSquare}
          translate={{ x: 400, y: 200 }}
          nodeSize={{ x: 300, y: 200 }}
          nodeLabelComponent={{
            render: <Card />,
            foreignObjectWrapper: {
              style: {
                // border: "1px solid black",
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
