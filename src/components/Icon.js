import React from 'react'

import IcomoonReact from "icomoon-react";
import iconSet from "../assets/icomoon/selection.json";

const Icon = ({ color, size, icon, className }) => (
  <IcomoonReact
    className={className}
    iconSet={iconSet}
    color={color}
    size={size}
    icon={icon}
  />
)

export default Icon;