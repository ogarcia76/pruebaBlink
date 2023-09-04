import { useState } from 'react'
import { TestsContext } from './TestsContext'


const initialTests = {
    test: {
      done: false
    },
  }

export const TestsProvider = ( { children }) => {
    const [tests, setTest] = useState(initialTests)


    return (
        <TestsContext.Provider value={{ tests, setTest }}>
            { children }
        </TestsContext.Provider>
    )
}