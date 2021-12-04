import React from 'react'
import Styles from './survey-list-styles.scss'
import { Footer, Header } from '@/presentation/components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <div className={[Styles.iconWrap, Styles.red].join(' ')}>
                <img className={Styles.icon} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAMAAABsDg4iAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFKADAAQAAAABAAAAEgAAAAA9nQVdAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMABAUiKjFCSV5kcXSAj5mbsbXJzNLj6O71+Pv8/SrZNWIAAABeSURBVBjTbc9JDoAgEAXR74DziLPS97+mCWBsQtfy7QpAMp7kenQOzEQAavrTAFlcGRqPBfE8TgJmRsCeBNwlJAk3CctAj+/INjhswFusdYGlV2xQgqESDOqODWi5vc+VF8/v0QrTAAAAAElFTkSuQmCC' />
              </div>
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2020</span>
              </time>
              <p>Qual é seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>

        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
