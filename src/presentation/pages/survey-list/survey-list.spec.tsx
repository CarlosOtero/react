import { SurveyList } from '@/presentation/pages'
import React from 'react'
import { render, screen } from '@testing-library/react'

describe('SurveyList Component', () => {
  test('Should present 4 empty itens on start', () => {
    render(<SurveyList />)
    const surveyList = screen.getByTestId('survey-list')
    expect(surveyList.querySelectorAll('li:empty').length).toBe(4)
  })
})
