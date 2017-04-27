import React, { Component, PropTypes } from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json';
class MarkdownComponent extends Component {

  render() {
    const item = remark().use(reactRenderer).processSync(this.props.md).contents;
    return (<div>
      {item}
    </div>);
  }
}

MarkdownComponent.propTypes = {
  md: PropTypes.string.isRequired,
};


export default MarkdownComponent;
