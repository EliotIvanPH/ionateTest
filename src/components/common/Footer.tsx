import * as React from 'react';

  interface FooterProps{
      text? : String,
      autor : String
  }

export function Footer(props:FooterProps){
    return(
        <div className="footer">Prueba realizada por <strong>{props.autor}</strong>.</div>
    );
}