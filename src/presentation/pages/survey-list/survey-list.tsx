import Styles from './survey-list-styles.scss'
import { Header, Footer } from '@/presentation/components'
import { SurveyContext, SurveyListItem, Error } from '@/presentation/pages/survey-list/components'
import { ILoadSurveyList } from '@/domain/usecases'
import React, { useEffect, useState } from 'react'

type Props = {
  loadSurveyList: ILoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const [state, setState] = useState({
    surveys: [] as ILoadSurveyList.Model[],
    error: '',
    reload: false
  })

  useEffect(() => {
    (async function () {
      loadSurveyList.loadAll()
        .then(surveys => setState({ ...state, surveys }))
        .catch(error => setState({ ...state, error: error.message }))
    })()
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <SurveyListItem />}
        </SurveyContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
