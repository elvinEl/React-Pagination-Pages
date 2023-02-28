import { useState } from 'react'

function NewTest() {
    const [rule, setRule] = useState('true')
    const [rules, setRules] = useState([
        { key: 1, value: '1 ci qaydani qebul edirem', checked: false },
        { key: 2, value: '2 ci qaydani qebul edirem', checked: false },
        { key: 3, value: '3 ci qaydani qebul edirem', checked: true },
    ])
    const checkRule = (key, checked) => {
        setRules(rules => rules.map(rule => {

            if (key == rule.key) {
                rule.checked = checked
            }
            return rule
        }))
    }
    const disabled = rules.every(rule => rule.checked)
    console.log(disabled)
    return (
        <div>
            <label >
                <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
                Qaydalari qebul edirem
            </label><br></br>
            {rules.map((rule) => (
                <label>
                    <input type="checkbox" checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} />
                    {rule.value}
                </label>
            ))}<br />
            <pre>{JSON.stringify(rules, null, 2)}</pre>
            <br></br>
            <button className='border-[1px]' disabled={!disabled} >Davam et</button>
        </div>
    )
}


export default NewTest
