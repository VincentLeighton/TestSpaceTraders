import { beforeEach, describe, expect, test } from 'vitest'
import {render} from '@testing-library/react'
import App from './App'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

describe('some test block',()=>{
    beforeEach(() => {
		const mockAxios = new MockAdapter(axios, {
			onNoMatch: 'throwException',
		})
		mockAxios.onGet('/').replyOnce(200, [], {
			'Content-Type': 'application/json;charset=utf-8',
		})
	})
    test("some test", ()=>{
        render(<App/>)
        expect(true).toBe(true)
    })
})