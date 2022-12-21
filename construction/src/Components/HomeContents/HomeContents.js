import React from 'react'
import "./HomeContents.css"

export default function HomeContents() {
  return (
    <div>
        
        <ol className="cards__container" title="Blog entries">
        <li className="card">
            <div className="card__thumb"><img className="animate" src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/main/assets/img-1.png"/></div>
            <div className="card__content">
            <h3 className="card__title">Card Title 1</h3>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde minus error consectetur, quos sunt officiis ad repellendus pariatur eligendi tempora praesentium.</p><a className="card__btn" aria-label="Read more about Card Title 1" href="#"><img src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/4a2aca9a4c61126b21ebdbc95119c4620fe61636/assets/arrow-right-solid.svg" alt=""/></a>
            </div>
        </li>
        <li className="card">
            <div className="card__thumb"><img className="animate" src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/main/assets/img-2.png"/></div>
            <div className="card__content">
            <h3 className="card__title">Card Title 2</h3>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde.</p><a className="card__btn" aria-label="Read more about Card Title 2" href="#"><img src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/4a2aca9a4c61126b21ebdbc95119c4620fe61636/assets/arrow-right-solid.svg" alt=""/></a>
            </div>
        </li>
        <li className="card">
            <div className="card__thumb"><img className="animate" src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/main/assets/img-3.png"/></div>
            <div className="card__content">
            <h3 className="card__title">Card Title 3</h3>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis unde minus error consectetur, quos sunt officiis ad repellendus pariatur.</p><a className="card__btn" aria-label="Read more about Card Title 3" href="#"><img src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/4a2aca9a4c61126b21ebdbc95119c4620fe61636/assets/arrow-right-solid.svg" alt=""/></a>
            </div>
        </li>
        <li className="card">
            <div className="card__thumb"><img className="animate" src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/main/assets/img-4.png"/></div>
            <div className="card__content">
            <h3 className="card__title">Card Title 4</h3>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis eaque necessitatibus, explicabo vero hic, perspiciatis.</p><a className="card__btn" aria-label="Read more about Card Title 4" href="#"><img src="https://raw.githubusercontent.com/Javieer57/CODEPEN-gnarly-grid-cards/4a2aca9a4c61126b21ebdbc95119c4620fe61636/assets/arrow-right-solid.svg" alt=""/></a>
            </div>
        </li>
        </ol>
    </div>
  )
}
