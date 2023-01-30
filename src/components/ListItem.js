import React from "react";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    // WE DESTRUCTURED THE PROPERTY
    const { name, link, icon, bgColor } = this.props.products;
    return (
      <div class="listItem" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={name} />
        <a href={link}>{name}</a>
      </div>
    );
  }
}

export default ListItem;
