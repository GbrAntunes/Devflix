import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [values, setValues] = useState(valoresIniciais)
  const [categorias, setCategorias] = useState([])

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor, // se valor for nome, vai se tornar: nome: 'valor'
    })
  }

  function handleInputChange(event) {
    const { getAttribute, value } = event.target

    setValue(
      event.target.getAttribute('name'),
      // getAttribute('name'),
      value
    )
  }

  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={(event) => {
        event.preventDefault()
        setCategorias([...categorias, values])

        setValues(valoresIniciais)
      }}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleInputChange}
        />

        <FormField
          label="Descrição"
          type="textArea"
          name="descricao"
          value={values.descricao}
          onChange={handleInputChange}
        />

        {/* <div>
          <label> Descrição
            <textArea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleInputChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          value={values.cor}
          type="color"
          name="cor"
          onChange={handleInputChange}
        />

        <button type="submit">
          Cadastrar
        </button>

      </form>

      <Link to="/">
        Home
      </Link>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}-${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

    </PageDefault>
  )
}

export default CadastroCategoria