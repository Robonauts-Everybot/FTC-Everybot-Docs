import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';

export default function CopyrightWrapper(props) {

  return (
    <div style={{fontFamily: "Ebot"}}>
      <Copyright {...props} />
    </div>
  );
}