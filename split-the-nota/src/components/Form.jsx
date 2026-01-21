import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
const navigate = useNavigate();

const [summa, setSumma] = useState('');
const [antal, setAntal] = useState('');
const [dricks, setDricks] = useState('');

function handleSubmit(e) {
  e.preventDefault()

  const total = Number(summa) + Number(dricks)
  const perPerson = Math.round(total / Number(antal))

  navigate('/results', {
    state: {
      perPerson
    }
  })
}

  return (
    <form onSubmit={handleSubmit}>
        <label>Summa</label>          
        <input value={summa} onChange={e => setSumma(e.target.value)} /> 
        <label>Antal vänner</label>          
        <input value={antal} onChange={e => setAntal(e.target.value)} />
        <label>Dricks</label>          
        <input value={dricks} onChange={e => setDricks(e.target.value)} />
        <button type='submit'>Räkna</button>
    </form>  
    )
  
}

export default Form