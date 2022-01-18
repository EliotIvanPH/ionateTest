import * as React from 'react';

  interface FooterProps{
      text? : String,
      autor : String
  }

export function Footer(props:FooterProps){
    return(
        <div className="footer">This will always appear at the bottom of the page, but <strong>{props.autor}</strong>.</div>
    );
}