import Validator from "../app";


test('test true', () => {
    const val = new Validator("CyberPunk").validateUsername()
    expect(val).toBe(true)
})

test('test false', () => {
    const val = new Validator("_CyberPunk").validateUsername()
    expect(val).toBe(false)
})